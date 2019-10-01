import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  currentUser: any;
  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  login() {
    // this.googlePlus.login({
    //   scopes: 'https://www.googleapis.com/auth/plus.login'
    // })
    // .then(res => {
    //   this.currentUser = res;
    //   this.presentAlert();
    //   this.router.navigate(['tabs']);
    //   console.log(res)
    // })
    // .catch(err => console.error(err));
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: `${this.currentUser.email} logged in successfully`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
