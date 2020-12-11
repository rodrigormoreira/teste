import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    'email' : new FormControl('', [Validators.required]),
    'password' : new FormControl(''),
  });

  login() {
    if(this.loginForm.get('email')?.value === 'admin@teste.com' && this.loginForm.get('password')?.value === '123admin!@#') this.router.navigate(['/home']);
    else {
      alert('erro');
    }
  }

  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

}
