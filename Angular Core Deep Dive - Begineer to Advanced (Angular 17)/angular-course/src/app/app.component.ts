import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = {
    title: "This is my title"
  };
  title = this.data.title;
  onButtonClicked() {
    alert("Button clicked")
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
