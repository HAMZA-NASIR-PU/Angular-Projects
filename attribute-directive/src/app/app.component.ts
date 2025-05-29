import { Component } from '@angular/core';
import { FancyButtonDirective } from './directives/fancy-button/fancy-button.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FancyButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
