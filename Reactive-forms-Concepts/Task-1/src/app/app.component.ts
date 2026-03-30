import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator()]],
    });
  }

  ngOnInit() {
    // Understanding the use of Observables in reactive forms on a FormGroup
    // this.registrationForm.valueChanges.subscribe((obj: any) => {
    //   debugger;
    //   console.log(obj);
    // });

    this.registrationForm.valueChanges
      .pipe(filter((data) => !this.isFormEmpty(data)))
      .subscribe((data: any) => {
        console.log('Form Data: ', data);
      });
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // control is of type FormControl
      const value: string = control.value || '';

      const errors: ValidationErrors = {};

      if (!/[A-Z]/.test(value)) {
        errors['noUpperCase'] = true;
      }

      if (!/\d/.test(value)) {
        errors['noNumber'] = true;
      }

      if (/\s/.test(value)) {
        errors['hasWhiteSpace'] = true;
      }

      if (value.length < 8) {
        errors['minLength'] = true;
      }

      return Object.keys(errors).length ? errors : null;
    };
  }

  private isFormEmpty(data: any): boolean {
    return Object.values(data).every(
      (v) => v === null || v === undefined || v === '',
    );
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
