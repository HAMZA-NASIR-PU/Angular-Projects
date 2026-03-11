import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('paraRef') para!: ElementRef<HTMLParagraphElement>;

  ngAfterViewInit() {
    console.log('****************** AfterViewInit Lifecycle...');
    console.log(this.para.nativeElement);
  }

  changeText() {
    this.para.nativeElement.textContent = 'Text changed by ViewChild!';
  }
}
