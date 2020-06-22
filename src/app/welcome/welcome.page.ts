import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(public translate: TranslateService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.testApi().subscribe(res => {
      alert(res);
      console.log(res);
    }, err => {
        console.log(err);
    });
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }
}
