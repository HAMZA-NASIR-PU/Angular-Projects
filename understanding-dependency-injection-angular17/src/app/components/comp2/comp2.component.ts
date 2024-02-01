import { Component, OnInit } from '@angular/core';
import { Ser1Service } from '../../services/ser1.service';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  providers: [Ser1Service],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component implements OnInit {
  constructor(private ser1: Ser1Service) {

  }

  ngOnInit(): void {
    console.log("Comp2 = " + this.ser1.func());
  }
}
