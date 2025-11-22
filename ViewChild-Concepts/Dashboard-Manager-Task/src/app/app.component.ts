import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DashboardManagerComponent } from './dashboard-manager/dashboard-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
