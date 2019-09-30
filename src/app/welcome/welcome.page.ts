import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  constructor(public translate: TranslateService,
     private alertController: AlertController,
     private router: Router) {
  }

  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }

 
  async alertAuthMethod() {
    const alert = await this.alertController.create({
      header: 'Authentication',
      message: `You can authenticate using <strong>social media apps</strong> or run as
                 <strong>incognito</strong>`,
      buttons: [
        {
          text: 'Incognito',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
           this.router.navigate(['tabs']);
          }
        }, {
          text: 'Auhenticate',
          cssClass: 'primary',
          handler: () => {
            this.router.navigate(['auth']);

          }
        }
      ]
    });

    await alert.present();
  }

}
