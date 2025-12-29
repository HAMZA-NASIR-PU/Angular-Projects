import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-ui-event-example',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ui-event-example.component.html',
  styleUrl: './ui-event-example.component.css',
})
export class UiEventExampleComponent implements OnInit {
  @ViewChild('form')
  form!: NgForm;

  model = {
    country: '',
    state: '',
    city: '',
  };

  countries: string[] = [];

  states: string[] = [];
  cities: string[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.fetchCountries();

    // ---- mimic edit / API prefill ----
    this.prefillForm();
  }

  private fetchCountries() {
    this.locationService.getCountries().subscribe((countryList: any) => {
      this.countries = countryList;
    });
  }

  onCountryChange() {
    this.locationService
      .getStates(this.model.country)
      .subscribe((stateList: any) => {
        this.states = stateList;
      });
  }

  onStateChange() {
    this.locationService
      .getCities(this.model.state)
      .subscribe((cityList: any) => {
        this.cities = cityList;
      });
  }

  prefillForm() {
    const apiData = {
      country: 'USA',
      state: 'New York',
      city: 'Buffalo',
    };

    this.model.country = apiData.country;
    this.model.state = apiData.state;
    this.model.city = apiData.city;

    this.onCountryChange();
    this.onStateChange();
  }
}
