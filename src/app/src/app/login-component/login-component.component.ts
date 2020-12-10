import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  // Exemplo de verificação p/ login

  name = 'rodrigo';
  password = '123';

  LoginCheck(nome: string, senha: string){
    return console.log(( nome === 'rodrigo' && senha === '123') ? 'SUCESSO!' : 'ERRO');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
