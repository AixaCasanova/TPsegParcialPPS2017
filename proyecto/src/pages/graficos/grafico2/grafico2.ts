import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavOptions, ViewController} from 'ionic-angular';
import {Http, URLSearchParams} from '@angular/http';
/**
 * Generated class for the ModificacionModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-grafico2',
  templateUrl: 'grafico2.html',
})
export class grafico2  
{

     

      constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public viewCtrl: ViewController) 
      {
         
      }

      
  }