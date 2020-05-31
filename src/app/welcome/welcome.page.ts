import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  constructor(public translate: TranslateService) {
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }
}
