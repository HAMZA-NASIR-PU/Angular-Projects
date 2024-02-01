import { Component, OnInit } from '@angular/core';
import { StudentRepositoryService } from '../../services/student-repository.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private studentRepository: StudentRepositoryService) {

  }
  ngOnInit(): void {
    console.log("Inside Login component = "+ this.studentRepository.getStudentName(1));

  }
}
