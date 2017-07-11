import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController  } from 'ionic-angular';
import {Http} from '@angular/http';
import { ModificacionModal } from '../modificacion-modal/modificacion-modal';
import { ModalController } from 'ionic-angular';
import { Menu } from '../../menu/menu';
import { servicioAuth } from '../../servicioAuth/servicioAuth';
import { AltaModal } from '../alta-modal/alta-modal';
import { ActionSheetController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-grilla-comision',
    templateUrl: 'grilla-comision.html',
})
export class GrillaComision {

    cargando = false;

    Comisiones;
    Com : Array<any> =[];

    private LANG;

    constructor(private alertCtrl: AlertController, public navCtrl: NavController, public auth: servicioAuth ,public navParams: NavParams, public viewCtrl: ViewController,
        private http: Http, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, private translate: TranslateService) {
            this.CargaGrilla();

            translate.stream('grilla-comision').subscribe((res: string) => {
                this.LANG = res;
            });

        }


        CargaGrilla()
        {
            this.cargando = true;
            console.info("entro");
            this.Comisiones=null;
            this.Com=[];
            this.http.get("http://tppps2.hol.es/ws1/comisiones")
            .map(res => res.json())
            .subscribe((quote) =>{
                this.cargando = false;
                this.Comisiones = quote;
                console.info(quote);
                for(let us of this.Comisiones)
                {
                    this.Com.push(us);
                }

            });

        }




        Modificar(id_comision, descripcion)
        {
            let alert = this.alertCtrl.create({
                title: this.LANG.modificar_descripcion,
                inputs: [
                    {
                        name: 'descripcion',
                        placeholder: this.LANG.placeholder_descripcion,
                        value: descripcion
                    }
                ],
                buttons: [
                    {
                        text: this.LANG.cancelar,
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: this.LANG.aceptar,
                        handler: data => {
                            console.info(id_comision, data['descripcion']);
                            this.cargando = true;

                            this.http.post("http://tppps2.hol.es/ws1/comisiones/modificar", {
                                id_comision: id_comision,
                                descripcion:data['descripcion']
                            })
                            .map(res => res.json())
                            .subscribe((quote) => {
                                this.cargando = false;
                                this.mostrarMensaje(this.LANG.modificar_ok);
                                this.CargaGrilla();
                            }, e => {
                                this.cargando = false;
                            });


                        }
                    }
                ]
            });
            alert.present();
        }



        Alta(descripcion)
        {

            let alert = this.alertCtrl.create({
                title: this.LANG.nueva_comision,
                inputs: [
                    {
                        name: 'descripcion',
                        placeholder: this.LANG.placeholder_descripcion
                    }
                ],
                buttons: [
                    {
                        text: this.LANG.cancelar,
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: this.LANG.aceptar,
                        handler: data => {
                            console.info(data);

                            this.cargando = true;
                            this.http.post("http://tppps2.hol.es/ws1/comisiones/alta", {
                                descripcion:data['descripcion']
                            })
                            .map(res => res.json())
                            .subscribe((quote) =>{
                                this.cargando = false;
                                this.mostrarMensaje(this.LANG.crear_ok);
                                this.CargaGrilla();
                            }, e => {
                                this.cargando = false;
                            });


                        }
                    }
                ]
            });
            alert.present();
        }

        Eliminar(id_comision, descripcion)
        {
            let alert = this.alertCtrl.create({
                title: this.LANG.eliminacion_de_comision,
                message: this.LANG.confirmar_eliminar_comision + descripcion,
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
                            this.http.post("http://tppps2.hol.es/ws1/comisiones/eliminar", {
                                id_comision: id_comision

                            })
                            .map(res => res.json())
                            .subscribe((quote) =>{
                                this.cargando = false;
                                this.mostrarMensaje(this.LANG.eliminar_ok);
                                this.CargaGrilla();
                            }, e => {
                                this.cargando = false;
                            });

                        }
                    }
                ]
            });
            alert.present();
        }

        abrirActionSheet (c) {
            let actionSheet = this.actionSheetCtrl.create({
                title: this.LANG.opciones,
                buttons: [
                    {
                        text: this.LANG.editar,
                        handler: () => {
                            this.Modificar(c.id_comision, c.descripcion);
                        }
                    },
                    {
                        text: this.LANG.eliminar,
                        role: 'destructive',
                        handler: () => {
                            this.Eliminar(c.id_comision, c.descripcion);
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
