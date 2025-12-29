import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private readonly baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/countries`);
  }

  getStates(country: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/states`, {
      params: { country },
    });
  }

  getCities(state: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/cities`, {
      params: { state },
    });
  }
}
