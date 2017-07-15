import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { EncuestaAlumno } from '../../encuesta-alumno/encuesta-alumno';

@Component({
    selector: 'page-resultado',
    templateUrl: 'resultado.html',
})
export class Resultado
{
    private encuestas = [];
    private cargando = false;

    constructor(public navCtrl: NavController, public viewCtrl:ViewController , public http:Http) {

        this.cargarEncuestas();

    }

    verEncuesta(encuesta) {
        this.navCtrl.push(EncuestaAlumno, {encuesta: encuesta}, {
            direction: 'forward',
            animation: 'ios-transition'
        });

    }

    cargarEncuestas() {
        this.cargando = true;
        this.http.get("http://tppps2.hol.es/ws1/encuestas")
        .map(res => res.json())
        .subscribe((quote) =>{
            this.cargando = false;
            this.encuestas = quote;
        }, e => {
            this.cargando = false;
        });
    }

    cancelar() {
        this.viewCtrl.dismiss();
    }


}
