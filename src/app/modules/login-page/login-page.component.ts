import { AuthService } from './../../guard/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()){
      this.router.navigateByUrl('/project-board');
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  loginProcess() {
    if(this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.value);
    }
  }

}
