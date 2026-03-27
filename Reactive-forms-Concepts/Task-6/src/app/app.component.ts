import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { AddressComponent } from './address/address.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,AddressComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group(
      {
        role: ['user', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [this.passwordRulesValidator()],
      },
    );
  }

  passwordRulesValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const role = group.get('role')?.value;
      const password = group.get('password')?.value;
      const confirmPassword = group.get('confirmPassword')?.value;

      if (!password || !confirmPassword || !role) {
        return null;
      }

      const errors: ValidationErrors = {};

      if (password !== confirmPassword) {
        errors['passwordMismatch'] = true;
      }

      if (role === 'admin' && password.length < 10) {
        errors['adminPasswordTooShort'] = true;
      }

      if (role === 'user' && password.length < 6) {
        errors['userPasswordTooShort'] = true;
      }

      return Object.keys(errors).length ? errors : null;
    };
  }

  get roleControl() {
    return this.registrationForm.get('role');
  }

  get passwordControl() {
    return this.registrationForm.get('password');
  }

  get confirmPasswordControl() {
    return this.registrationForm.get('confirmPassword');
  }

  submitForm(): void {
    this.registrationForm.markAllAsTouched();

    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
