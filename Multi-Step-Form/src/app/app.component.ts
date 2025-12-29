import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('formRef') form!: NgForm;

  @ViewChild('stepRef') step!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    console.log(this.form);
  }

  nextStep() {}

  prevStep() {}
}
