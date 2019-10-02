import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
// import { FacebookLoginResponse } from '@rdlabo/capacitor-facebook-login';

const { FacebookLogin, GoogleAuth } = Plugins;
const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async signIn(provider) {
    switch (provider) {
      case 'GOOGLE':
        const googleUser = await GoogleAuth.signIn();
        console.log(googleUser);
        break;
      case 'FACEBOOK':
        const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
        console.log(result);
        break;
      default:
        console.log('DEFAULT login');
    }
  }
}
