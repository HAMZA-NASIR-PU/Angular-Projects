import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface PostCodeLenth {
  key: string;
  value: string;
}

export interface Country {
  code: string;
  name: string;
}

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
})
export class AddressComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  profileForm!: FormGroup;
  countries!: Country[];
  postalCodeLength!: PostCodeLenth[];

  ngOnInit(): void {
    //You get this from API
    this.countries = JSON.parse(
      '[{"name":"United States","code":"US"},{"name":"India","code":"IN"}]',
    );
    //You get this from API
    this.postalCodeLength = JSON.parse(
      '[{"value":5,"key":"US"},{"value":6,"key":"IN"}]',
    );

    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group(
        {
          country: ['', Validators.required],
          postalCode: ['', Validators.required],
        },
        {
          validators: this.validateAddress(),
        },
      ),
    });
  }

  submitForm() {
    if (this.profileForm.valid) {
      console.log('Form submitted: ', this.profileForm.value);
    }
  }

  validateAddress(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const errors: ValidationErrors | null = {};

      const country = control.get('country')?.value || '';
      const postalCode = control.get('postalCode')?.value || '';

      if (country && postalCode) {
        const matchedRecord = this.postalCodeLength.find(
          (el) => el.key === country,
        );
        if (postalCode.length !== matchedRecord?.value) {
          errors['invalidLength'] =
            'Postal code length must be ' + matchedRecord?.value;
        }
      }

      return Object.keys(errors).length ? errors : null;
    };
  }
}
