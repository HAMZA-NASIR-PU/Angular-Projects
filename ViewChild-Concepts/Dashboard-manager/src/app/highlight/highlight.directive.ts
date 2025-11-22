import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: true
})
export class HighlightDirective {
    constructor(private el: ElementRef) { }

    setHighlight(active: boolean) {
        this.el.nativeElement.style.boxShadow = active ? '0 0 10px 3px yellow' : 'none';
    }
}