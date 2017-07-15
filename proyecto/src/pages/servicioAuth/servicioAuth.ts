import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {User} from '../servicioAuth/user';
import 'rxjs/Rx';
import { TranslateService } from '@ngx-translate/core';

 @Component({
  selector: 'page-contact',
  templateUrl: 'servicioAuth.html'
})

export class servicioAuth {

    currentUser: User;
    ListaUsuarios = "";

    private LANG;

    constructor(private http: Http, private translate: TranslateService) {

        translate.stream('servicioAuth').subscribe((res: string) => {
            this.LANG = res;
        });

    }

    public getUsuarioByUsuario (usuario) {

        return this.http.get('http://tppps2.hol.es/ws1/usuarios?usuario='+usuario)
        .timeout(15000)
        .map(r => r.json());

    }

    public login(credenciales) {

        if (credenciales.usuario == null || credenciales.clave == null) {

            return Observable.throw(this.LANG.ingrese_credenciales);

        } else {

            return Observable.create(observer => {

                this.getUsuarioByUsuario(credenciales.usuario).subscribe((usuario) => {
                    console.log('getUsuarioByUsuario: ', usuario);

                    // Si existe el usuario en la base de datos SQL entro.
                    if (usuario) {
                        this.currentUser = new User(usuario.id_usuario, usuario.usuario, usuario.clave, usuario.nombre, usuario.id_tipo, usuario.tipo_usuario, usuario.imagen, usuario.idioma);
                        observer.next(true);
                    } else {
                        observer.next(false);
                    }

                    observer.complete();

                }, (e) => {
                    observer.error('hostinguer');
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
