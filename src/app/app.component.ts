import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  loggedIn: boolean = false;
  message: string = "";
  error = false;
  alertStyle = "alert-danger";


  @Input() loginMessage: boolean;

  recieveMessage(e) {
    this.loggedIn = e;

    if(e) {
      this.message = "Login Successful!";
      this.alertStyle = "alert-success";
    }
    else {
      this.message = "Login Failed!";
      this.alertStyle = "alert-danger";
    }
  }
}
