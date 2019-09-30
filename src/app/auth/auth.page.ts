import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private googlePlus: GooglePlus) { }

  ngOnInit() {
  }

  login() {
    this.googlePlus.login({
      scopes: 'https://www.googleapis.com/auth/plus.login'
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

}
