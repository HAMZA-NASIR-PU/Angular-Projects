import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { LocationService } from './services/location.service';
import { UiEventExampleComponent } from './ui-event-example/ui-event-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    JsonPipe,
    UiEventExampleComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  form!: FormGroup;

  countries: string[] = [];

  states: string[] = [];
  cities: string[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fetchCountries();

    // ---- mimic edit / API prefill ----
    this.prefillForm();
  }

  private fetchCountries() {
    this.locationService.getCountries().subscribe((countryList: any) => {
      this.countries = countryList;
    });
  }

  private initForm(): void {
    this.form = this.fb.group({
      country: [''],
      state: [''],
      city: [''],
    });

    this.form
      .get('country')!
      .valueChanges.pipe(
        filter(Boolean),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((country) => {
        console.log('Country changes...');
        this.locationService.getStates(country).subscribe((stateList: any) => {
          this.states = stateList;
        });
      });

    this.form
      .get('state')!
      .valueChanges.pipe(
        filter(Boolean),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((state) => {
        console.log('State changes...');
        this.locationService.getCities(state).subscribe((cityList: any) => {
          this.cities = cityList;
        });
      });
  }

  private prefillForm(): void {
    const apiData = {
      country: 'Pakistan',
      state: 'Punjab',
      city: 'Lahore',
    };

    this.form.patchValue(apiData, { emitEvent: true });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
