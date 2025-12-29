import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements AfterViewInit {
  @Input() color: 'yellow' | 'red' | 'green' = 'yellow';

  @Input() textColor: 'white' | 'black' = 'white';

  constructor(private el: ElementRef<HTMLButtonElement>) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
    this.el.nativeElement.style.color = this.textColor;
  }
}
