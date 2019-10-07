import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth.service';
import { TabsPage } from './tabs/tabs.page';
import { WelcomePage } from './welcome/welcome.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate: TranslateService,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
    translate.addLangs(['en', 'ro']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      if (this.authService.currentUserValue) {
        this.router.navigate(['tabs']);
      } else {
        this.router.navigate(['']);
      }
      this.splashScreen.hide();
    });
  }
}
