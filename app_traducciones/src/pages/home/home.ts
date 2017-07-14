import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    public idioma: any;
    public select_idioma: any;

    constructor(public navCtrl: NavController, public translateService: TranslateService) {

        var userLang = navigator.language.split('-')[0];
        userLang = /(es|en|es_ar|br)/gi.test(userLang) ? userLang : 'es_ar';

        //this.idioma = this.select_idioma = userLang;
        this.translateService.use(userLang);
        this.fixTraduccionTexto(userLang);
    }

    public cambiarIdioma (lang) {

        if (lang.length > 0) {
            this.translateService.use(lang);

            // Fix para que se traduzca el texto del select.
            this.fixTraduccionTexto(lang);
        }


    }

    /**
     * Funciona que arregla el error que hay en el ion-select con las traducciones.
     * @param  {string} lang Idioma a setear.
     * @return {void}
     */
    public fixTraduccionTexto (lang) {

        this.select_idioma = '';
        this.idioma = '';
        setTimeout(() => {
            this.select_idioma = lang;
            this.idioma = lang;
        }, 100);

    }

}
