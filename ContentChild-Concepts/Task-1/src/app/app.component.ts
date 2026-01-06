import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterContentInit, AfterViewInit {
  ngAfterContentInit(): void {
    console.log('AfterContentInit of AppComponent called.............');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit of AppComponent called.............');
  }
}
