import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController  } from 'ionic-angular';
import {Http} from '@angular/http';
import { ModificacionModalCursos } from '../modificacion-modal-cursos/modificacion-modal-cursos';
import { ModalController } from 'ionic-angular';
import { Menu } from '../../menu/menu';
import { servicioAuth } from '../../servicioAuth/servicioAuth';
import { AltaModal } from '../alta-modal/alta-modal';
import { AltaModalCursos } from '../alta-modal-cursos/alta-modal-cursos';
import { ActionSheetController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-grilla-curso',
  templateUrl: 'grilla-curso.html',
})
export class GrillaCurso {

    cargando = false;

    Cursos;
    Cur : Array<any> =[];
    comisiones;
    profesores=null;
    UssP=[];
    archivo;
    aGuardar: Array<any> =[];

    private LANG;

  constructor(public file: File, private alertCtrl: AlertController, public navCtrl: NavController, public auth: servicioAuth ,public navParams: NavParams, public viewCtrl: ViewController,
      private http: Http, public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, private translate: TranslateService) {
         this.archivo=file;
        this.cargarProfesoresYGrilla();

        translate.stream('grilla-curso').subscribe((res: string) => {
            this.LANG = res;
        });
  }

  cargarProfesoresYGrilla() {
      this.cargando = true;

      this.CargarProfesores().subscribe((usuarios) => {
          this.profesores = usuarios.filter((p) => p.tipo_usuario == 'Profesor');

          this.CargaGrilla();
      }, e => {
          this.mostrarMensaje(this.LANG.hubo_un_error_intente_recargar);
          this.cargando = false;
      });

  }

  CargarProfesores()
  {
      return this.http.get("http://tppps2.hol.es/ws1/usuarios")
      .map(res => res.json());
  }


      CargaGrilla()
      {
          this.cargando = true;
          console.info("CargaGrilla");
          this.Cursos=null;
          this.Cur=[];
          this.http.get("http://tppps2.hol.es/ws1/cursos")
          .map(res => res.json())
          .subscribe((cursos) =>{
              this.cargando = false;
              this.Cursos = cursos;

              for (let c of this.Cursos) {
                  c.profesor = this.profesores.find((p) => p.id_usuario == c.id_usuario);
              }
              console.log(this.Cursos);

          }, e => {
              this.cargando = false;
          });

      }

      GuardarFile()
        {
            for(let c of this.Cursos)
            {
                this.aGuardar.push({curso : c['descripcion'] , Comision: c['comision_descripcion'] , Profesor: c['profesor']['nombre']});
            }
            console.info(this.aGuardar);
            console.info(this.Cursos);
             console.info(this.archivo.externalDataDirectory);
              this.archivo.writeExistingFile(this.archivo.externalDataDirectory,"cursos.txt", this.aGuardar)
                .then( _ => {
                    this.mostrarMensaje(this.LANG.guardo_ok);
                })
                .catch(
                err => {
                    this.mostrarMensaje(this.LANG.guardo_error)
                });



        }


    Modificar(id_curso, descripcion, comision,id_usuario)
    {
      console.info(id_curso, descripcion, comision,id_usuario);

        let curs = {
            id_curso: id_curso,
            comision: comision,
            descripcion: descripcion,
            id_usuario:id_usuario

        };
        let modal = this.modalCtrl.create(ModificacionModalCursos, curs);
        modal.onDidDismiss(data => {
            if (data) {
                this.CargaGrilla();
                this.mostrarMensaje(this.LANG.modificar_ok);
            }
        });
        modal.present();

    }

    Alta()
    {

        let modal = this.modalCtrl.create(AltaModalCursos);
        modal.onDidDismiss(data => {
            if (data) {
                this.CargaGrilla();
                this.mostrarMensaje(this.LANG.crear_ok);
            }
        });
        modal.present();

    }

    Eliminar(id_curso, desc_curso)
    {
      console.info(desc_curso);
              let alert = this.alertCtrl.create({
              title: this.LANG.eliminacion_de_curso,
              message: this.LANG.confirmar_eliminar_curso + desc_curso,
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
                    this.http.post("http://tppps2.hol.es/ws1/cursos/eliminar", {
                           id_curso: id_curso

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
            title: 'Opciones',
            buttons: [
                {
                    text:  this.LANG.editar,
                    handler: () => {
                        this.Modificar(c.id_curso, c.descripcion, c.comision_descripcion, c.id_usuario);
                    }
                },
                {
                    text: this.LANG.eliminar,
                    role: 'destructive',
                    handler: () => {
                        this.Eliminar(c.id_curso, c.descripcion);
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
