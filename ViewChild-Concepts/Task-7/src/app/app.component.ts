import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

import { HighlightDirective } from './directives/highlight/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(HighlightDirective) highlighter!: HighlightDirective;

  @ViewChildren(HighlightDirective)
  highlighters!: QueryList<HighlightDirective>; // Access all elements in the DOM that have appHighlight directive.

  @ViewChild('highlightMe', { read: HighlightDirective })
  highlighter2!: HighlightDirective;

  highlight() {
    this.highlighter.apply('yellow');
  }

  highlightAll() {
    console.log(this.highlighters.toArray());
    this.highlighters.forEach((h) => h.apply('orange'));
  }

  highlight2() {
    this.highlighter2.apply('green');
  }
}
