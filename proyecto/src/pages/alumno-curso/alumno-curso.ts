import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  UnCurso;
  UnAlumno;

  private LANG;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private auth: servicioAuth, private translate: TranslateService) {
      this.usuarioLogueado = this.auth.getUserInfo();
      console.info(this.usuarioLogueado);
      this.traerAlumnos();
      this.traerCusos();

      translate.stream('alumno-curso').subscribe((res: string) => {
          this.LANG = res;
      });
  }



  traerAlumnos()
  {
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

            });

  }

  traerCusos()
  {
        this.Cursos=null;
          this.Cur=[];
            this.http.get("http://tppps2.hol.es/ws1/cursos")
            .map(res => res.json())
            .subscribe((quote) =>{
            this.Cursos = quote;


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
          console.info(quote);
          alert(this.LANG.alta_ok);
      },
      err => {
          alert(this.LANG.alta_error);
      });
      this.UnCurso=null;
      this.UnAlumno=null;
  }

}
