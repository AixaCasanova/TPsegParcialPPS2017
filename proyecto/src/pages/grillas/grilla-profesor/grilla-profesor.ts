import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, ToastController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { ModificacionModal } from '../modificacion-modal/modificacion-modal';
import { ModalController } from 'ionic-angular';
import { servicioAuth } from '../../servicioAuth/servicioAuth';
import { AltaModal } from '../alta-modal/alta-modal';
import { AuthData } from '../../../providers/auth-data';
import { ActionSheetController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-grilla-profesor',
    templateUrl: 'grilla-profesor.html',
})
export class GrillaProfesor {

    cargando = false;
    usuarios = [];

    private LANG;

    constructor(private alertCtrl: AlertController, public navCtrl: NavController, public auth: servicioAuth, public navParams: NavParams, public viewCtrl: ViewController, private http: Http, public modalCtrl: ModalController, public authData: AuthData,
    public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, private translate: TranslateService) {
        this.CargaGrilla();

        translate.stream('grilla-administrativo').subscribe((res: string) => {
            this.LANG = res;
        });
    }

    CargaGrilla()
    {
        this.cargando = true;
        console.info("entro");
        this.usuarios = [];

        this.http.get("http://tppps2.hol.es/ws1/usuarios")
        .map(res => res.json())
        .subscribe((quote) =>{

            this.usuarios = quote.filter( u => {
                return u.id_tipo == 4; // Profesor
            });

            this.cargando = false;

        }, e => {
            this.cargando = false;
        });

    }

    Modificar(id_usuario, usuario, nombre, clave, id_tipo, imagen)
    {
        let usM = {
            id_usuario: id_usuario,
            usuario: usuario,
            nombre: nombre,
            clave: clave,
            id_tipo: id_tipo,
            imagen: imagen
        };
        let modal = this.modalCtrl.create(ModificacionModal, usM);
        modal.onDidDismiss(data => {
            if (data) {
                this.CargaGrilla();
                this.mostrarMensaje(this.LANG.usuario_modificado_ok);
            }
        });
        modal.present();

    }

    Alta()
    {
        let modal2 = this.modalCtrl.create(AltaModal, {
            tipo: "Profesor",
            id_tipo: 4
        });
        modal2.onDidDismiss(data => {
            if (data) {
                this.CargaGrilla();
                this.mostrarMensaje(this.LANG.usuario_creado_ok);
            }
        });
        modal2.present();
    }

    Eliminar(id_usuario, usuario, nombre, clave, id_tipo)
    {
        let alert = this.alertCtrl.create({
            title: this.LANG.eliminacion_de_usuario,
            message: this.LANG.confirmar_eliminar_usuario + ' ' + usuario +'?',
            buttons: [
                {
                    text: this.LANG.cancelar,
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancelar clicked');
                    }
                },
                {
                    text: this.LANG.aceptar,
                    handler: () => {
                        console.log('Aceptar clicked');
                        this.cargando = true;
                        this.http.post("http://tppps2.hol.es/ws1/usuarios/eliminar", {
                            id_usuario: id_usuario
                        })
                        .map(res => res.json())
                        .subscribe((quote) => {
                            this.cargando = false;
                            this.CargaGrilla();
                            this.mostrarMensaje(this.LANG.usuario_eliminado_ok);
                        });

                    }
                }
            ]
        });
        alert.present();

    }

    abrirActionSheet (usr) {
        let actionSheet = this.actionSheetCtrl.create({
            title: this.LANG.opciones,
            buttons: [
                {
                    text: this.LANG.editar,
                    handler: () => {
                        this.Modificar(usr.id_usuario, usr.usuario, usr.nombre, usr.clave, usr.id_tipo, usr.imagen);
                    }
                },
                {
                    text: this.LANG.eliminar,
                    role: 'destructive',
                    handler: () => {
                        this.Eliminar(usr.id_usuario, usr.usuario, usr.nombre, usr.clave, usr.id_tipo);
                    }
                },
                {
                    text: this.LANG.cancelar,
                    role: 'cancel'
                }
            ]
        });

        actionSheet.present();
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
