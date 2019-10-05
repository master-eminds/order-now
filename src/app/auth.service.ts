import { Injectable, ɵConsole } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { FacebookLoginResponse } from '@rdlabo/capacitor-facebook-login';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
const { FacebookLogin, GoogleAuth } = Plugins;
const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
const FACEBOOK_FIELDS = 'id,first_name,last_name,name,email,picture';
const { Storage } = Plugins;
declare var FB;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private router: Router) {
    Storage.get({ key: 'currentUser' }).then(res => {
      this.currentUserSubject = new BehaviorSubject<any>(res);
      this.currentUser = this.currentUserSubject.asObservable();
    });
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  async signIn(provider) {
    switch (provider) {
      case 'GOOGLE':
        const googleUser = await GoogleAuth.signIn();
        await Storage.set({ key: 'currentUser', value: JSON.stringify(googleUser) });
        this.currentUserSubject.next(googleUser);
        break;
      case 'FACEBOOK':
        const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS }) as FacebookLoginResponse;
        if (result.accessToken) {
          await FB.api('/me', { fields: FACEBOOK_FIELDS }, async (res) => {
                await Storage.set({key: 'currentUser', value: JSON.stringify(res)});
                this.currentUserSubject.next(res);
              });
        } else {
            console.log('Facebook API failed');
        }
        break;
      default:
        const dummyUser = { id: Math.random(), dummyUser: true };
        await Storage.set({ key: 'currentUser', value: JSON.stringify(dummyUser) });
        this.currentUserSubject.next(dummyUser);
    }
  }

  public login(data) {
    return new Observable((observer) => {
      observer.next(data);
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    });
  }

  public async logout() {
    Storage.remove({ key: 'currentUser' });
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth']);
  }
}
