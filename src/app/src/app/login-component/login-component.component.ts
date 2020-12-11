import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  autorizado: boolean = false;

  loginCheck(user: string, pw: string){
    if( user === 'admin' && pw === '123456') this.autorizado = true;
  }

  isWorking : boolean = true;

  stopWorking() {
    this.isWorking = !this.isWorking;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
