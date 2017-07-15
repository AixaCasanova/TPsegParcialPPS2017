import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
})

export class User {
    id_usuario: number;
    usuario: string;
    clave: string;
    nombre: string;
    tipo_usuario: string;
    id_tipo: number;
    imagen: string;
    idioma: string;

  constructor(id_usuario: number, usuario: string, clave: string, nombre: string, id_tipo: number, tipo_usuario:string, imagen: string = null, idioma: string = 'es') {
      this.id_usuario = id_usuario;
      this.usuario = usuario;
      this.clave = clave;
      this.nombre = nombre;
      this.id_tipo = id_tipo;
      this.tipo_usuario = tipo_usuario;
      this.imagen = imagen;
      this.idioma = idioma;
  }
}
