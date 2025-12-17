import { Component } from '@angular/core';
import { ApprovalFormComponent } from './components/approval-form/approval-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApprovalFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
