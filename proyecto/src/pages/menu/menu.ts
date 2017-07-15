import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams, ModalController, ToastController } from 'ionic-angular';

import {Alumno} from "../alumno/alumno";
import {Administrativo} from '../administrativo/administrativo';
import {Administrador} from '../administrador/administrador';
import {Profesor} from '../profesor/profesor';
import {Login} from '../login/login';

import {GrillaAdministrador} from "../grillas/grilla-administrador/grilla-administrador";
import {GrillaAdministrativo} from "../grillas/grilla-administrativo/grilla-administrativo";
import {GrillaAlumno} from "../grillas/grilla-alumno/grilla-alumno";
import {GrillaProfesor} from "../grillas/grilla-profesor/grilla-profesor";
import {Encuestas} from '../encuestas/encuestas';
import {GenerarEncuesta} from '../encuestas/generarencuesta/generarencuesta';
import {EnviarEncuesta} from '../encuestas/enviarencuesta/enviarencuesta';
import {GrillaComision} from "../grillas/grilla-comision/grilla-comision";
import {GrillaCurso} from "../grillas/grilla-curso/grilla-curso";

import { Grafico1 } from "../graficos/grafico1/grafico1";
import { Grafico2 } from "../graficos/grafico2/grafico2";
import { Grafico3 } from "../graficos/grafico3/grafico3";
import { Resultado } from "../graficos/resultado/resultado";
import { AlumnoCurso } from "../alumno-curso/alumno-curso";
import { AcercaDePage } from "../acerca-de-page/acerca-de-page";
import { Miubicacion } from "../miubicacion/miubicacion";
import { AngularFireAuth } from 'angularfire2/auth';
import { servicioAuth } from '../servicioAuth/servicioAuth';
import { Ayuda } from '../ayuda/ayuda';
import { ModificacionModal } from '../grillas/modificacion-modal/modificacion-modal';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html',
})
export class Menu {
    private rootPage;
    private administrativoPage;
    private alumnoPage;
    private administradorPage;
    private profesorPage;
    private usuarioLogueado: {
        usuario:string,
        clave:string,
        queHago:string,
        tipo_usuario:string
    };
    private grillaProfesor;
    private grillaAlumno;
    private grillaAdministrador;
    private grillaAdministrativo;
    private grillaComision;
    private grillaCurso;
    private grafico1;
    private grafico2;
    private grafico3;
    private alumnocurso;
    private miubicacion;
    private resultado = Resultado;

    private LANG;

    constructor(public navCtrl: NavController,public viewCtrl:ViewController, public navParams: NavParams,public afAuth: AngularFireAuth,
        public modalCtrl: ModalController, public auth: servicioAuth, public toastCtrl: ToastController, private translate: TranslateService) {

        this.usuarioLogueado = (navParams.data && (Object.keys(navParams.data).length === 0)) ? this.auth.getUserInfo() : navParams.data;

        this.initPages();


        if (this.usuarioLogueado.tipo_usuario == 'Alumno') {
            this.openPage(this.alumnoPage);
        } else if (this.usuarioLogueado.tipo_usuario == 'Administrativo') {
            this.openPage(this.administrativoPage);
        } else if (this.usuarioLogueado.tipo_usuario == 'Administrador') {
            this.openPage(this.administradorPage);
        } else if (this.usuarioLogueado.tipo_usuario == 'Profesor') {
            this.openPage(this.profesorPage);
        }

        translate.stream('menu').subscribe((res: string) => {
            this.LANG = res;
        });

    }

    initPages () {

        this.alumnoPage = Alumno;
        this.administrativoPage = Administrativo;
        this.administradorPage = Administrador;
        this.profesorPage = Profesor;
        this.grillaProfesor = GrillaProfesor;
        this.grillaAlumno = GrillaAlumno;
        this.grillaAdministrador = GrillaAdministrador;
        this.grillaAdministrativo = GrillaAdministrativo;
        this.grillaComision = GrillaComision;
        this.grillaCurso= GrillaCurso;
        this.grafico1 = Grafico1;
        this.grafico2 = Grafico2;
        this.grafico3 = Grafico3;
        this.miubicacion= Miubicacion;

        this.alumnocurso = AlumnoCurso;
    }

    Encuestas(queHago){
        console.info(queHago);
        if(queHago == "profesorGenerar"){
            console.info(this.usuarioLogueado);
            this.openPage(GenerarEncuesta);
        }else{
            console.info(this.usuarioLogueado);
            this.openPage(EnviarEncuesta);
        }


    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Menu');
    }

    openPage(p) {
        this.rootPage = p;
    }

    acercaDe() {
        this.navCtrl.push(AcercaDePage);
    }

    /**
    * Funcion para cerrar la sesion del usuario
    * @return void
    */
    cerrarSesion() {
        /** Ejecutar funcion para desloguear usuario. */
        this.afAuth.auth.signOut();
        this.navCtrl.setRoot(Login, this.usuarioLogueado);
    }

      ayuda() {
        /** Ejecutar funcion para desloguear usuario. */
        this.openPage(Ayuda);
    }

    verPerfilDeUsuario (usuario) {

        usuario.ocultar_tipo = true;

        console.log(usuario);

        let modal = this.modalCtrl.create(ModificacionModal, usuario);
        modal.onDidDismiss(data => {
            if (data) {
                this.auth.currentUser.imagen = data.imagen;
                this.translate.use(data.idioma);

                setTimeout(() => {
                    this.mostrarMensaje(this.LANG.perfil_modificado_ok);
                    console.log(data);
                }, 100);
            }
        });
        modal.present();
    }

    mostrarMensaje (mensaje) {
        let toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    }

}
