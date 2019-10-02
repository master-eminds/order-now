import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(public translate: TranslateService,
              private router: Router) {
  }

  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

  async showAlert() {
    const alertRet = await Modals.confirm({
      cancelButtonTitle: 'Incognito',
      message: `You can authenticate using social media apps or run as incognito`,
      okButtonTitle: 'Authenticate',
      title: 'Authentication'
    });

    if (alertRet) {
      this.router.navigate(['auth']);
    } else {
      this.router.navigate(['tabs']);
    }
  }
}
