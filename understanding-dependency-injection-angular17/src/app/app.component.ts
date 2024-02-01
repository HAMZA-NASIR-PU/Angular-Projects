import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BaseRepository } from './services/BaseRepository/BaseRepository';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'understanding-dependency-injection-angular17';
  constructor(private baseRepository: BaseRepository) {
    console.log("AppComponent constrcutor called...");
  }

  ngOnInit(): void {
    console.log("Inside App component = " + this.baseRepository.func2());
    console.log("Inside App Component = ");
    this.baseRepository.func1()
  }
}
