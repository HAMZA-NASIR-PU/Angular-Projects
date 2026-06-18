import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ClickTrackerDirective } from './directives/click-tracker/click-tracker.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClickTrackerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ClickTrackerDirective) trackerDirective!: ClickTrackerDirective;

  message = '';

  ngAfterViewInit() {
    this.trackerDirective.track.subscribe((msg) => {
      this.message = msg; // updates UI when button clicked
    });
  }
}
