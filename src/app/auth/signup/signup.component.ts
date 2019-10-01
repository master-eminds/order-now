import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signIn() {
    GoogleAuth.singIn();
  }

}
