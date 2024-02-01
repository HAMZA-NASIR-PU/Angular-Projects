import { Component, OnInit } from '@angular/core';
import { BaseRepository } from '../../services/BaseRepository/BaseRepository';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor() {
    console.log("LoginComponent constrcutor called...");
  }
  ngOnInit(): void {

  }
}
