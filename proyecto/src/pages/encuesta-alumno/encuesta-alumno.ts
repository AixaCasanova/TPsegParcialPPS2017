import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { servicioAuth } from '../servicioAuth/servicioAuth';


@Component({
    selector: 'page-encuesta-alumno',
    templateUrl: 'encuesta-alumno.html',
})
export class EncuestaAlumno {

    cargando;
    id_encuesta;
    alu=[];
    resul=[];
    prre=[];
    titulo;

    private usuarioLogueado;
    constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public auth: servicioAuth) {

        console.info(navParams.data['encuesta']['id_encuesta']);
        console.info(navParams.data['encuesta']);
        this.titulo=navParams.data['encuesta']['descripcion'];
        this.id_encuesta=navParams.data['encuesta']['id_encuesta'];
        this.cargarAlumno();
        this.usuarioLogueado = this.auth.getUserInfo();
    }

    cargarAlumno()
    {
        this.cargando = true;

        this.http.get("http://tppps2.hol.es/ws1/encuestas/"+this.id_encuesta+"/alumnos")
        .map(res => res.json())
        .subscribe((quote) =>{
            
            this.cargando = false;
            console.info(quote['alumnos']);
            for(let a of quote['alumnos'])
            {
                console.info(a['nombre']);
                if(!this.alu.some(x=>x==a['nombre'])){
                    this.alu.push(a.nombre);
                }
            }

            for(let nom of this.alu)
            {
                this.prre=[];

                for(let a of quote['alumnos'])
                {
                    if(nom== a['nombre'])
                    {
                        this.prre.push({pregunta: a['pregunta'], opcion:a['opcion']});

                    }
                }
                this.resul.push({alumno:nom, pregyresp:this.prre});
            }
            console.info(this.resul);
        }, e => {
            this.cargando = false;
        });
    }

}
