import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

  isValid: boolean = true

  inValid() {
    this.isValid = false
  }

  list = [
    { "id": 1, "name": "Dheeraj", "City": "Indore" },
    { "id": 2, "name": "Sunny", "City": "Indore" },
    { "id": 3, "name": "Rahul", "City": "Indore" },
    { "id": 4, "name": "Sanket", "City": "Indore" }
  ]


}
