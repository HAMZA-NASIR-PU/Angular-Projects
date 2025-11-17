import { CommonModule, NgForOf } from '@angular/common';

import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  headings = ['Angular', 'React', 'Vue'];

  @ViewChildren('heading') headingRefs!: QueryList<
    ElementRef<HTMLHeadingElement>
  >;

  ngAfterViewInit(): void {
    console.log('********** AfterViewInit called ************');
    console.log(this.headingRefs);
    console.log(this.headingRefs.toArray());
  }

  highlight() {
    this.headingRefs.forEach((h) => (h.nativeElement.style.color = 'red'));
  }
}
