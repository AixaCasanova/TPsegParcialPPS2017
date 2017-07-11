import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { servicioAuth } from '../servicioAuth/servicioAuth';
import {Http} from '@angular/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'alumno-curso',
    templateUrl: 'alumno-curso.html',
})
export class AlumnoCurso {

    usuarioLogueado;
    Usuarios=[];
    UssAl=[];
    Cursos=[];
    Cur=[];
    UnCurso = 0;
    UnAlumno = 0;

    cargando = false;

    private LANG;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private auth: servicioAuth, private translate: TranslateService, public toastCtrl: ToastController) {
        this.usuarioLogueado = this.auth.getUserInfo();
        console.info(this.usuarioLogueado);

        this.cargando = true;
        Promise.all([this.traerAlumnos(), this.traerCursos()]).then((data) => {
            this.cargando = false;
        });

        translate.stream('alumno-curso').subscribe((res: string) => {
            this.LANG = res;
        });
    }

    traerAlumnos()
    {
        return new Promise ((resolve, reject) => {
            console.info("entro");
            this.Usuarios=null;
            this.UssAl=[];
            this.http.get("http://tppps2.hol.es/ws1/usuarios")
            .map(res => res.json())
            .subscribe((quote) =>{
                this.Usuarios = quote;
                console.info(this.Usuarios);
                for(let us of this.Usuarios)
                {
                    if(us['tipo_usuario'] == "Alumno")
                    {
                        this.UssAl.push(us);
                    }
                }

                resolve(true);

            }, (e) => {
                resolve(false);
            });
        });

    }

    traerCursos()
    {
        return new Promise ((resolve, reject) => {
            this.Cursos = null;
            this.Cur = [];

            this.http.get("http://tppps2.hol.es/ws1/cursos")
            .map(res => res.json())
            .subscribe((quote) => {
                this.Cursos = quote;

                resolve(true);

            }, (e) => {
                resolve(false);
            });
        });
    }


    Alta()
    {
        console.info(this.UnCurso);
        console.info(this.UnAlumno);

        this.http.post("http://tppps2.hol.es/ws1/alumnoCurso/alta", {
            id_usuario:this.UnAlumno,
            id_curso: this.UnCurso
        })
        .map(res => res.json())
        .subscribe((quote) =>{
            this.UnCurso = 0;
            this.UnAlumno = 0;
            console.info(quote);
            this.mostrarMensaje(this.LANG.alta_ok);
        },
        err => {
            this.mostrarMensaje(this.LANG.alta_error);
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
