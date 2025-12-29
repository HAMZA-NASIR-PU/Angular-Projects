import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements AfterViewInit, AfterViewChecked {
  count = 0;

  ngAfterViewInit() {
    console.log(
      '************** AfterViewInit of Counter Component *****************'
    );
  }

  ngAfterViewChecked() {
    console.log(
      '************* AfterViewChecked of Counter Component ******************'
    );
  }

  increment() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
}
