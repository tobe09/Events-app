import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em: { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: this.firstName = new FormControl(this.authService.currentUser && this.authService.currentUser.firstName, Validators.required),
      lastName: this.lastName = new FormControl(this.authService.currentUser && this.authService.currentUser.lastName, Validators.required)
    });
  }

  saveProfile(formValues: any) {
    if (!this.profileForm.valid) {
      return;
    }

    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  isValidFirstName() {
    return !this.firstName.invalid || !this.firstName.touched;
  }

  isValidLastName() {
    return !this.lastName.invalid || !this.lastName.touched;
  }
}