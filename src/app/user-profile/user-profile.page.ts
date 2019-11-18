import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  currentUser = null;
  profileForm: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(res => {
      this.currentUser = res;
    });
    console.log(this.currentUser);

    this.profileForm = this.fb.group({
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      firstName: [this.currentUser.givenName, [Validators.required]],
      lastName: [this.currentUser.familyName, [Validators.required]],
      phone: [this.currentUser.phone || '0742123123', [Validators.required]]
    });
  }

}
