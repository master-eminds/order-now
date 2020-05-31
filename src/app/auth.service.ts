import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
const FACEBOOK_FIELDS = 'id,first_name,last_name,name,email,picture';
import { Storage } from '@ionic/storage';

declare var FB;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentUser: Observable<any>;

  constructor(private router: Router, private storage: Storage) {
    this.storage.get('currentUser').then(res => {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(res));
      this.currentUser = this.currentUserSubject.asObservable();
    });
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  async signIn(provider) {
    switch (provider) {
      case 'GOOGLE':
        // const googleUser = await GoogleAuth.signIn();
        // await Storage.set({ key: 'currentUser', value: JSON.stringify(googleUser) });
        // this.currentUserSubject.next(googleUser);
        // this.router.navigate(['tabs']);
        break;
      case 'FACEBOOK':
        // const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS }) as FacebookLoginResponse;
        // if (result) {
        //   // FB.api(path, method, params, callback)
        //   await FB.api('/me', 'get', { fields: FACEBOOK_FIELDS }, async (res) => {
        //         res.imageUrl = res.picture.data.url;
        //         await Storage.set({key: 'currentUser', value: JSON.stringify(res)});
        //         this.currentUserSubject.next(res);
        //         this.router.navigate(['tabs']);
        //       });
        // } else {
        //     console.log('Facebook API failed');
        // }
        break;
      default:
        const dummyUser = { id: Math.random(), dummyUser: true };
        await this.storage.set('currentUser', JSON.stringify(dummyUser));
        this.currentUserSubject.next(dummyUser);
        this.router.navigate(['tabs']);
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
    this.storage.remove('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['auth']);
  }
}
