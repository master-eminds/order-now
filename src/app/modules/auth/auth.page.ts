import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DomController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  submitted = false;
  authForm: FormGroup;
  returnUrl: string;
  loading = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public authService: AuthService,
              private domCtrl: DomController
    ) {
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }, {});

  }

  ionViewWillEnter() {
    this.updateBackground();
  }

  onSubmit(value: any): void {
    this.submitted = true;

    // Stop if the form validation has failed
    if (this.authForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login({
      email : this.frm.email.value,
      password : this.frm.password.value }
      ).pipe(first())
        .subscribe(
            data => {
                this.loading = false;
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.loading = false;
      });
    }

    get frm() { return this.authForm.controls; }

    updateBackground() {
      const content = document.querySelector('.auth-content');
      const innerScroll = content.shadowRoot.querySelector('.inner-scroll');

      this.domCtrl.write(() => {
        (innerScroll as any).style.background = "url('./../../assets/login-wallpaper.jpg') no-repeat center center / cover";
      });
    }
}
