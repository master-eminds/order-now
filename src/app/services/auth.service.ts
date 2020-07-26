import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
const FACEBOOK_FIELDS = 'id,first_name,last_name,name,email,picture';

declare var FB;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentUser: Observable<any>;

  constructor(private router: Router,
              private googlePlus: GooglePlus,
              private facebookApi: Facebook,
              private storage: Storage) {
    this.storage.get('currentUser').then(res => {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(res));
      this.currentUser = this.currentUserSubject.asObservable();
    });
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  async signIn(provider?) {
    switch (provider) {
      case 'GOOGLE':
        this.googlePlus.login({})
        .then(res => {
          this.storage.set('currentUser', JSON.stringify(res));
          this.currentUserSubject.next(res);
          this.router.navigate(['tabs']);
          alert(JSON.stringify(res));
        })
        .catch(err => console.error(err));
        break;
      case 'FACEBOOK':
        this.facebookApi.login(FACEBOOK_PERMISSIONS)
        .then((res: any) => {  
          if (res) {
            this.facebookApi.api(`/me?fields=${FACEBOOK_FIELDS}`, FACEBOOK_PERMISSIONS).then(res => {
                res.imageUrl = res.picture.data.url;
                this.storage.set('currentUser', JSON.stringify(res));
                this.currentUserSubject.next(res);
                this.router.navigate(['tabs']);
            });
            alert('Logged into Facebook! \n' + res);
          } else {
            alert('Facebook API failed');
          }
        })
        .catch(e => console.log('Error logging into Facebook', e));
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
