import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams,ModalController } from 'ionic-angular';

import {Alumno} from "../alumno/alumno";
import {Administrativo} from '../administrativo/administrativo';
import {Administrador} from '../administrador/administrador';
import {Profesor} from '../profesor/profesor';
import {Login} from '../login/login';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {GrillaAdministrador} from "../grillas/grilla-administrador/grilla-administrador";
import {GrillaAdministrativo} from "../grillas/grilla-administrativo/grilla-administrativo";
import {GrillaAlumno} from "../grillas/grilla-alumno/grilla-alumno";
import {GrillaProfesor} from "../grillas/grilla-profesor/grilla-profesor";
import {Encuestas} from '../encuestas/encuestas';

/**
* Generated class for the Menu page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
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

    constructor(public navCtrl: NavController,public viewCtrl:ViewController,
     public navParams: NavParams,public af: AngularFire,public modalCtrl: ModalController) {

 
        this.usuarioLogueado = navParams.data;
        console.log('this.usuario');
        console.log(this.usuarioLogueado);

        this.alumnoPage = Alumno;
        this.administrativoPage = Administrativo;
        this.administradorPage = Administrador;
        this.profesorPage = Profesor;
        this.grillaProfesor = GrillaProfesor;
        this.grillaAlumno = GrillaAlumno;
        this.grillaAdministrador = GrillaAdministrador;
        this.grillaAdministrativo = GrillaAdministrativo; 

        if (this.usuarioLogueado.tipo_usuario == 'Alumno') {
            this.openPage(this.alumnoPage);
        } else if (this.usuarioLogueado.tipo_usuario == 'Administrativo') {
            this.openPage(this.administrativoPage);
        } else if (this.usuarioLogueado.tipo_usuario == 'Administrador') {
            this.openPage(this.administradorPage);
        } else if (this.usuarioLogueado.tipo_usuario == 'Profesor') {
            this.openPage(this.profesorPage);
        }
    }

Encuestas(queHago){
        if(queHago == "profesorGenerar"){
            this.usuarioLogueado.queHago = "GenerarEncuesta";
        }else{
            this.usuarioLogueado.queHago = "EnviarEncuesta";
        }
  
         this.navCtrl.setRoot(Encuestas, this.usuarioLogueado);

}
    ionViewDidLoad() {
        console.log('ionViewDidLoad Menu');
    }

    openPage(p) {
        this.rootPage = p;
    }

    /**
     * Funcion para cerrar la sesion del usuario
     * @return void
     */
    cerrarSesion() {
        /** Ejecutar funcion para desloguear usuario. */
        this.af.auth.logout();
        this.navCtrl.setRoot(Login, this.usuarioLogueado);
    }

}