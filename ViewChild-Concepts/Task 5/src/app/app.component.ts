import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';

import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  counterRef?: ComponentRef<CounterComponent>;

  load() {
    this.container.clear();
    this.counterRef = this.container.createComponent(CounterComponent);
  }

  increment() {
    this.counterRef?.instance.increment();
  }
}
