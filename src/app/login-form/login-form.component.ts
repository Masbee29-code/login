import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    console.log(users);
  }

  //Highly insecure login. Temporary.
  login(loginInfo) {
    for(const user of users) {
      if(user.username == this.username && user.password == this.password) {
        this.validLogin = true;
        break;
      }
    }

    if(this.validLogin) {
      //Send message to app parent
    }
    else {
      this.username = "";
      this.password = "";
    }

  }

}
