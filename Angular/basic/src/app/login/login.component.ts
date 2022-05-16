import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {}
  fname = 'Dheeraj'
  lname = 'Haryani'
  add = 7 + 8 ;
  i = "../assets/Ang.png"

  ngOnInit() {

  }
  Add(){
    this.add = 8473568;
  }
}
