import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  submitted = false;
  authForm: FormGroup;
  returnUrl: string;
  loading = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              public authService: AuthService
    ) {
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }, {});
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
}
