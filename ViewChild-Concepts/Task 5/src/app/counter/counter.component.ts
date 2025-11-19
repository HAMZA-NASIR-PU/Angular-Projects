import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count = 0;
  increment() {
    this.count++;
  }
  reset() {
    this.count = 0;
  }
}
