import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentRepositoryService } from './services/student-repository.service';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'understanding-dependency-injection-angular17';
  constructor(private studentRepository: StudentRepositoryService) {

  }

  ngOnInit(): void {
    console.log("Inside App component = " + this.studentRepository.getStudentName(1));
  }
}
