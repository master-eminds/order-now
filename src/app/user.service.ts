import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { FacebookLoginResponse } from '@rdlabo/capacitor-facebook-login';

const { FacebookLogin, GoogleAuth } = Plugins;
const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
const FACEBOOK_FIELDS = 'id,first_name,last_name,name,email,picture';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = null;

  constructor() {
    this.getLocalUser();
  }

  async signIn(provider) {
    switch (provider) {
      case 'GOOGLE':
        const googleUser = await GoogleAuth.signIn();
        this.currentUser = googleUser;
        this.setLocalUser();
        break;
      case 'FACEBOOK':
        const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS }) as FacebookLoginResponse;
        if (result.accessToken) {
        FB.api('/me',
          {
            fields : FACEBOOK_FIELDS
          }, res => this.currentUser = res);
        this.setLocalUser();
        } else {
          console.log('Facebook API failed');
        }
        break;
      default:
        console.log('DEFAULT login');
        this.currentUser = { id: Math.random(), dummyUser: true };
        this.setLocalUser();
    }
  }

  async setLocalUser() {
    await Storage.set({
      key: 'user',
      value: JSON.stringify(this.currentUser)
    });
  }

  async getLocalUser() {
    const ret = await Storage.get({ key: 'user' });
    this.currentUser = JSON.parse(ret.value);
  }
}
