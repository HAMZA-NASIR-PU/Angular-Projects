import {
  Component,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';

import { CounterComponent } from './counter/counter.component';
import { ButtonDirective } from './button-directive/button.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, ButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild(CounterComponent) counter!: CounterComponent;

  ngAfterViewInit() {
    console.log(
      '***************** AfterViewInit of App Component ****************'
    );
  }

  ngAfterViewChecked() {
    console.log(
      '**************** AfterViewChecked of App Component ******************'
    );
  }

  increment() {
    this.counter.increment();
  }

  reset() {
    this.counter.reset();
  }
}
