import { Component, OnInit } from '@angular/core';
import { Ser1Service } from '../../services/ser1.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  providers: [Ser1Service],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component implements OnInit {

  constructor(private ser1: Ser1Service) {

  }

  ngOnInit(): void {
    console.log("Comp1 = " + this.ser1.func());
  }
}
