import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {User} from '../servicioAuth/user';
import 'rxjs/Rx';

 @Component({
  selector: 'page-contact',
  templateUrl: 'servicioAuth.html'
})

export class servicioAuth {

    currentUser: User;
    ListaUsuarios = "";

    constructor(private http: Http) {
    }

    public getUsuarioByUsuarioYClave (usuario, clave) {

        return this.http.get('http://tppps2.hol.es/ws1/usuarios?usuario='+usuario+'&clave='+clave)
        .map(r => r.json());

    }

    public login(credenciales) {

        if (credenciales.usuario == null || credenciales.clave == null) {

            return Observable.throw("Por favor inserte las credenciales");

        } else {

            return Observable.create(observer => {

                this.getUsuarioByUsuarioYClave(credenciales.usuario, credenciales.clave).subscribe((usuario) => {

                    // Si existe el usuario en la base de datos SQL entro.
                    if (usuario) {
                        this.currentUser = new User(usuario.id_usuario, usuario.usuario, usuario.clave, usuario.tipo_usuario);
                        observer.next(true);
                    } else {
                        observer.next(false);
                    }

                    observer.complete();

                });

            });

        }
    }

    public getUserInfo() : User {
        return this.currentUser;
    }

    public logout() {
        return Observable.create(observer => {
            this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    }

}
