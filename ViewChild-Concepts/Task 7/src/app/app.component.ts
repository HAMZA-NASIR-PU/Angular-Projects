import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  highlighters!: QueryList<HighlightDirective>;  // Access all elements in the DOm that have appHighlight directive.

  highlight() {
    this.highlighter.apply('yellow');
  }

  highlightAll() {
    debugger;
    this.highlighters.forEach((h) => h.apply('yellow'));
  }
}
