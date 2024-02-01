import { Injectable } from '@angular/core';

@Injectable()
export class Ser1Service {

  constructor() {
    console.log("Ser1Service service constructor called...");
  }

  func(): string {
    return "Ser1Service func()";
  }
}
