import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  /*loginForm: FormGroup = new FormGroup({
    'email' : new FormControl('', [Validators.required]),
    'password' : new FormControl(''),
  });

  login() {
    if(this.loginForm.get('email')?.value === 'admin@teste.com' && this.loginForm.get('password')?.value === '123admin!@#') this.router.navigate(['/home']);
    else {
      alert('erro');
    }
  }*/

  hasError: boolean = false;
  errorMessage: string = '';

  formGroup: FormGroup = new FormGroup({
    email: new FormControl( '', [Validators.required] ),
    password: new FormControl( '', [Validators.required] )
  });

  constructor(private router: Router,
              private authService: AuthServiceService) {
   }

  ngOnInit(): void {
   }

  loginProcess() {
    if ( this.formGroup.valid ) {
      this.authService.login( this.formGroup.value ).subscribe(
        result => {
            this.router.navigate(['/home']);
        }, error => {
            this.hasError = true;
            this.errorMessage = error.error.errorMessage;
            setTimeout(
              () => this.hasError = false,
              5000
            );
        }
      )
    }
  }



}
