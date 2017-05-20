import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController,NavParams, Loading, IonicPage } from 'ionic-angular';
import { servicioAuth } from '../servicioAuth/servicioAuth';
import {Usuario} from "../usuario/usuario";
import {Http} from '@angular/http';
import {User} from '../servicioAuth/user';
import {Administrador} from "../administrador/administrador";
import {Administrativo} from "../administrativo/administrativo";
import {Alumno} from "../alumno/alumno";
import {Profesor} from "../profesor/profesor";
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { AuthData } from '../../providers/auth-data';
import { Menu } from '../menu/menu';

import 'rxjs/Rx';

@Component({
  selector: 'page-contact',
  templateUrl: 'login.html'
})

export class Login {

usuarioLogueado : User;

   Login = {
 usuario: "",
  clave: ""
   }

  constructor(public navCtrl: NavController,
  private auth: servicioAuth, private alertCtrl: AlertController, private loadingCtrl: LoadingController,
  public authData: AuthData) {

}




 public loading: Loading;


public login() {

this.authData.loginUser(this.Login.usuario,this.Login.clave).then( authData => {
    this.showLoading().then(() => {

        this.auth.login(this.Login).subscribe(allowed => {

            this.loading.dismiss().then(() => {

                if (allowed) {
                    this.usuarioLogueado = this.auth.getUserInfo();

                    if (this.usuarioLogueado.tipo_usuario == "Administrador") {
                        this.navCtrl.setRoot(Menu, this.usuarioLogueado);
                    } else
                    if (this.usuarioLogueado.tipo_usuario == "Administrativo") {
                        this.navCtrl.setRoot(Menu, this.usuarioLogueado);
                    }else
                    if (this.usuarioLogueado.tipo_usuario == "Alumno") {
                        this.navCtrl.setRoot(Menu, this.usuarioLogueado);
                    }
                    if (this.usuarioLogueado.tipo_usuario == "Profesor") {
                        this.navCtrl.setRoot(Menu, this.usuarioLogueado);
                    }
                } else {
                    this.showError("Acceso denegado");
                }
            });
        }, error => {
            this.loading.dismiss().then(() => {
                this.showError(error);
            });
        });
    });
 },error => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{
                text: "Ok",
                role: 'cancel'
              }]
            });
          alert.present();
          });
      

}

showLoading(): Promise<any> {
    this.loading = this.loadingCtrl.create({
        content: 'Por favor espere...',
        dismissOnPageChange: true
    });
    return this.loading.present();
}

showError(text) {
    let alert = this.alertCtrl.create({
        title: 'Fallo',
        subTitle: text,
        buttons: ['OK']
    });
    alert.present(prompt);
}


EscribirCredenciales(tipo){
  if(tipo == "Administrador" ){
    this.Login.usuario = "testAdmin@escuelita.com";
    this.Login.clave ="admin123";
  }else if(tipo == "Administrativo" ){
    this.Login.usuario = "testAdministrativo@escuelita.com";
    this.Login.clave ="admini123";
  }else if(tipo == "Alumno" ){
    this.Login.usuario = "testAlumno@escuelita.com";
    this.Login.clave ="alumno123";
  }else if(tipo == "Profesor" ){
     this.Login.usuario = "testProfe@escuelita.com";
    this.Login.clave ="profe123";
  }
}

}