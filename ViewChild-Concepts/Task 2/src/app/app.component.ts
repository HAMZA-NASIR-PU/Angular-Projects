import {
  Component,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild(CounterComponent) counter!: CounterComponent;

  constructor() {
    console.log('**************** Constructor of App Cmponent');
  }

  ngAfterViewInit(): void {
    console.log('********** AfterViewInit of AppComponent *************');
  }

  ngAfterViewChecked(): void {
    console.log('********* AfterViewChecked of AppComponent ***********');
  }

  increment() {
    this.counter.increment();
  }

  reset() {
    this.counter.reset();
  }
}
