import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Status } from './enums/status.enum';
import { StatusLabels } from './records/status-labels';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  selectedStatus: Status | null = null;

  enumStatus = Status;
  statusLabels = StatusLabels;

  statusList: Status[] = [];

  ngOnInit(): void {
    // this.statusList.push(Status.PENDING_APPROVAL);
    this.statusList = Object.values(this.enumStatus) as Status[];
    this.fetchStatusFromBackend();
  }

  fetchStatusFromBackend() {
    this.selectedStatus = Status.PENDING_APPROVAL;
  }

  submitForm() {
    if (this.selectedStatus) {
      console.log(`Sending to backend: ${this.selectedStatus}`);
    }
  }
}
