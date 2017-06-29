import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Pregunta } from '../encuesta/pregunta';
import {Modales} from "../encuestas/modales/modales";
import { TranslateService } from '@ngx-translate/core';

/**
* Generated class for the EncuestaDetalle page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
@Component({
    selector: 'page-encuesta-detalle',
    templateUrl: 'encuesta-detalle.html',
})
export class EncuestaDetalle {

    private encuesta: any;
    private preguntas = [];
    private toggle = [];
    private cargando = false;

    private LANG;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, public toastCtrl: ToastController, public modalCtrl: ModalController, private translate: TranslateService) {

        this.encuesta = navParams.data;

        if (this.encuesta.id_encuesta > 0) {
            this.cargarPreguntas();
        }

        translate.stream('encuesta-detalle').subscribe((res: string) => {
            this.LANG = res;
        });
        
    }

    ionViewDidLoad() {
    }

    cargarPreguntas() {

        this.cargando = true;
        this.preguntas = [];
        this.http.get('http://tppps2.hol.es/ws1/encuestas/'+this.encuesta.id_encuesta+'/preguntas')
        .map(res => res.json().preguntas)
        .subscribe((preguntas) => {
            console.log('Preguntas: ', preguntas);
            this.preguntas = preguntas;
            this.cargando = false;
        }, e => {
            this.cargando = false;
        });

    }

    crearPregunta () {

        let datos = {
            idEncuesta: this.encuesta.id_encuesta,
            queHago: 'AgregarPregunta'
        }

        let modal = this.modalCtrl.create(Modales, datos);

        modal.onDidDismiss(data => {

            if (data) {
                this.mostrarMensaje(this.LANG.pregunta_agregada_ok);
                this.cargarPreguntas();
            }

        });

        modal.present();

    }

    eliminarPregunta (id_pregunta) {

        this.cargando = true;

        this.http.delete('http://tppps2.hol.es/ws1/pregunta/'+id_pregunta)
        .map(r => r.json())
        .subscribe(data => {
            this.mostrarMensaje(this.LANG.pregunta_eliminada.ok);
            this.cargarPreguntas();
        });

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
