import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import '@codetrix-studio/capacitor-google-auth';
import '@rdlabo/capacitor-facebook-login';
import { AuthService } from './auth.service';
import { TabsPage } from './tabs/tabs.page';
import { WelcomePage } from './welcome/welcome.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage: any = TabsPage;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate: TranslateService,
    private authService: AuthService
  ) {

    if (this.authService.currentUser) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = WelcomePage;
    }
    this.initializeApp();
    translate.addLangs(['en', 'ro']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
