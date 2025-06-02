import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[myDirective]',
    standalone: true,
    exportAs: 'myDirective' // This allows template variable referencing
})
export class MyDirective {

    private inputElement: HTMLInputElement | undefined;

    constructor(private el: ElementRef<HTMLInputElement>) {
        debugger;
        this.inputElement = this.el.nativeElement;
    }

    toggleVisibility() {
        if (this.inputElement?.type === 'password') {
            this.inputElement.type = 'text';
        } else if (this.inputElement?.type === 'text') {
            this.inputElement.type = 'password';
        }
    }

}
