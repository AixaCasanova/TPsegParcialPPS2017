import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Login} from "../pages/login/login";
import { Profesor } from "../pages/profesor/profesor";
import { AngularFireAuth } from 'angularfire2/auth';
import { servicioAuth } from '../pages/servicioAuth/servicioAuth';
import { User } from '../pages/servicioAuth/user';
import { Menu } from '../pages/menu/menu';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
import { AuthData } from '../providers/auth-data';
import * as firebase from 'firebase/app';
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage: any;
    splashScreen: SplashScreen;
    private platformReady = false;
    private authReady = false;

    private LANG;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth: AngularFireAuth, private auth: servicioAuth,
    private nativeAudio: NativeAudio,public vibration:Vibration, public authData: AuthData, private events: Events, private translate: TranslateService) {
        this.splashScreen = splashScreen
        platform.ready().then(() => {
            console.log('platformReady');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            this.platformReady = true;
            this.initializeTranslateServiceConfig();
            this.hideSplashScreen();
        });
    }

    initializeTranslateServiceConfig() {
        var userLang = navigator.language.split('-')[0];
        userLang = /(es|en|pr)/gi.test(userLang) ? userLang : 'es';

        this.translate.setDefaultLang('es');

        this.translate.use(userLang);

        this.translate.stream('app-components').subscribe((res: string) => {
            this.LANG = res;
        });
    }

    ngOnInit() {

        this.afAuth.authState.subscribe(user => {
            this.authReady = true;
            this.hideSplashScreen();

            console.log('MyApp :: authState: ', user);

            if (user) {
                // go to home page
                this.redirectAuthenticatedUser(user);
            } else {
                // go to login page
                this.rootPage = Login;
            }

        }, error => {
            this.rootPage = Login;
        });
    }

    hideSplashScreen() {

        if (this.platformReady && this.authReady) {

            setTimeout(() => {
                this.splashScreen.hide();
            }, 100);

        }

    }

    redirectAuthenticatedUser (user) {

        if (this.isGitHubUser(user)) {

            this.auth.currentUser = new User(user.uid, user.email, '', 'Profesor');
            this.auth.currentUser.id_tipo = 4;
            this.auth.currentUser.imagen = user.photoURL;

            this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
            this.vibration.vibrate([100]);

            this.rootPage = Menu;

        } else {

            this.auth.login({usuario: user.email, clave: ''}).subscribe(existe => {

                this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
                this.vibration.vibrate([100]);

                if (existe) {
                    this.rootPage = Menu;
                } else {
                    // No existe el usuario en la BD, pero si en firebase
                    // por lo tanto lo elimino de firebase.

                    this.authData.removeCurrentUser().then( _ => {

                        this.events.publish('auth:login:no_existe', this.LANG.usuario_no_existe);

                        this.rootPage = Login;

                    }, error => {

                        this.events.publish('auth:login:no_existe', this.LANG.usuario_no_existe);
                        this.rootPage = Login;

                    });
                }
            }, error => {
                this.rootPage = Login;
            });


        }

    }

    isGitHubUser (user) {

        let githubProvider = new firebase.auth.GithubAuthProvider();
        let githubProviderId = githubProvider.providerId;

        for (let provider of user.providerData) {

            if (provider.providerId == githubProviderId) {
                return true;
            }

        }

        return false;

    }

}
