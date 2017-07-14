import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();

      this.initializeTranslateServiceConfig();

      setTimeout(() => {
          splashScreen.hide();
      }, 100);
      
    });
  }

  initializeTranslateServiceConfig() {
      var userLang = navigator.language.split('-')[0];
      userLang = /(es|en|es_ar|br)/gi.test(userLang) ? userLang : 'es_ar';

      this.translate.setDefaultLang('es');

     // this.translate.use(userLang);
  }
}
