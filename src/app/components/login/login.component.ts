import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService, AuthResponseData } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  error: string = null;

  constructor(private userService: UserService) { }
  
  onSubmit(form: NgForm) {

    if (!form.valid) {
      return;
      // if form is not valid, stop the execution
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;    
    authObs = this.userService.login(email, password);

    authObs.subscribe(
      resData => {
        console.log(resData);
      },
      errorMessage => {
        this.error = errorMessage;
      }
    );

    form.reset();
  }
}
