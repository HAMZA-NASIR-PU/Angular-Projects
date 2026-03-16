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
  @ViewChild('myPara1', { static: false })
  para?: ElementRef<HTMLParagraphElement>;

  @ViewChild('myPara2', { static: true })
  para2!: ElementRef<HTMLParagraphElement>;

  isVisible = false;

  ngOnInit(): void {
    console.log('***************** OnInit called *********************');
    console.log('Without static: ', this.para);
    console.log('With static: ', this.para2);
  }

  ngAfterViewInit(): void {
    console.log(
      '************************** AfterViewInit called **************************'
    );
  }

  toggle() {
    this.isVisible = !this.isVisible;
    console.log(this.para);
  }
}
