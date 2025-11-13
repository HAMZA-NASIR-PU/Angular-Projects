import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('paraRef') para!: ElementRef<HTMLParagraphElement>;

  ngAfterViewInit(): void {
    console.log(this.para.nativeElement.textContent);
  }

  changeText() {
    this.para.nativeElement.textContent = 'Text changed using ViewChild!';
  }
}
