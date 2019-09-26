import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(public translate: TranslateService) {
    console.log(translate);
  }

  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

}
