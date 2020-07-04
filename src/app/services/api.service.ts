import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private httpClient: HttpClient, private http: HTTP) { }

  testApi() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    this.http.get('https://eminds-278314.appspot.com', httpOptions, {}).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}
