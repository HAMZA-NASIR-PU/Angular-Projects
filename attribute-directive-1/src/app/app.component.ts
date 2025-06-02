import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MyDirective } from './directives/my-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MyDirective    
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
