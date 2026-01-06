import {
  Component,
  ContentChild,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements AfterContentInit, AfterViewInit {
  @ContentChild('cardTitle')
  titleElement!: ElementRef<HTMLElement>;

  ngAfterContentInit(): void {
    console.log('AfterContentInit of CardComponent called.............');
    console.log(
      'Projected title text: ',
      this.titleElement.nativeElement.textContent?.trim()
    );
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit of CardComponent called.......');
  }
}
