import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { users } from "./../../assets/users";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  users = users;
  username: string;
  password: string;
  validLogin: boolean = false;

  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log(users);
  }

  //Highly insecure login. Temporary.
  login() {
    for (const user of users) {
      if (user.username == this.username && user.password == this.password) {
        this.validLogin = true;
        break;
      }
      else {
        this.validLogin = false;
      }
    }

    this.messageEvent.emit(this.validLogin);
    this.username = "";
    this.password = "";
  }

}
