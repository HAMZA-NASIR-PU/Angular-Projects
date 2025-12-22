import { CommonModule } from '@angular/common';

import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  // See that Article: https://upmostly.com/angular/what-does-the-static-property-on-viewchild-do

  @ViewChild('myPara1') para1!: ElementRef<HTMLParagraphElement>;

  @ViewChild('myPara2', { static: true })
  para2!: ElementRef<HTMLParagraphElement>;

  isVisible = false;

  isVisible2 = true;

  constructor() {
    console.log('************ Constructor of App Component ******************');
  }

  ngOnInit() {
    console.log('*************** OnInit of App Component ********************');
    console.log('Without static: ', this.para1);
    console.log('With static: ', this.para2);
  }

  ngAfterViewInit() {}

  toggle() {
    this.isVisible = !this.isVisible;
    console.log(this.para1);
  }

  toggle2() {
    this.isVisible2 = !this.isVisible2;
    console.log(this.para2); // Always undefined even set isVisible2 = true.
  }
}
