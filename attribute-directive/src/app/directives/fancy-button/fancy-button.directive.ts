import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appFancyButton]',
  standalone: true
})
export class FancyButtonDirective implements OnInit {
  @Input() color: 'primary' | 'danger' | 'success' = 'primary';
  @Input() shape: 'rounded' | 'square' = 'rounded';
  @Input() size: 'sm' | 'lg' | '' = '';

  private _baseColor!: string;
  private _hoverColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.applyBaseStyles();
    this.applyColor();
    this.applyShape();
    this.applySize();
  }

  private applyBaseStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s ease');
  }

  private applyColor() {
    switch (this.color) {
      case 'primary':
        this._baseColor = '#405faf';
        this._hoverColor = '#354c96';
        break;
      case 'danger':
        this._baseColor = '#dc3545';
        this._hoverColor = '#c82333';
        break;
      case 'success':
        this._baseColor = '#28a745';
        this._hoverColor = '#218838';
        break;
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', this._baseColor);
  }

  private applyShape() {
    const radius = this.shape === 'rounded' ? '0.75rem' : '0rem';
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', radius);
  }

  private applySize() {
    let padding = '0.5rem 1rem';
    if (this.size === 'sm') padding = '0.25rem 0.5rem';
    if (this.size === 'lg') padding = '0.75rem 1.25rem';

    this.renderer.setStyle(this.el.nativeElement, 'padding', padding);
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.size === 'lg' ? '1.25rem' : this.size === 'sm' ? '0.75rem' : '1rem');
  }

  @HostListener('mouseenter') onHover() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this._hoverColor);
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this._baseColor);
  }
}
