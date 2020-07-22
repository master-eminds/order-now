import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private platform: Platform,
              private httpBrowser: HttpClient) { }

  testApi() {

    // if(this.platform.is('mobileweb')) {
      this.httpBrowser.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => {
        alert(JSON.stringify(res));
        console.log(res);
      }, err => {
        alert(err);
      });
    // } else {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json'
    //     })
    //   };
    //   this.httpMobile.get('https://jsonplaceholder.typicode.com/todos/1', httpOptions, {}).then(res => {
    //     console.log(res);
    //   }, err => {
    //     console.log(err);
    //   })
    // }
    }
}
