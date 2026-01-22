import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumbers: this.fb.array([this.createPhoneGroup()]), 
    });
  }

  createPhoneGroup(): FormGroup {
    return this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]],
    });
  }

  get phoneNumbers(): FormArray {
    return this.registrationForm.get('phoneNumbers') as FormArray;
  }

  addPhone() {
    this.phoneNumbers.push(this.createPhoneGroup());
  }

  removePhone(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log('Form Value:', this.registrationForm.value);
    }
  }
}
