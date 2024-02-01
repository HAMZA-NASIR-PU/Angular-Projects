import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentRepositoryService {

  constructor() { }

  getStudentName(id: number) : string{
    return "John";
  }
}
