import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      contact: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(/^[0-9]{11}$/)]]
      })
    });
  }

  get contactGroup() {
    return this.registrationForm.get('contact');
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log('Form Value:', this.registrationForm.value);
    }
  }
}
