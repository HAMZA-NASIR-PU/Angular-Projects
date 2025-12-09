import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClickTracker]',
  standalone: true
})
export class ClickTrackerDirective {

  @Output() track = new EventEmitter<string>();

  @HostListener('click')
  handleClick() {
    this.track.emit('Element was clicked!');
  }
}
