import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})
export class AutenticacaoPage implements OnInit {

  public entrar(){
    let email = (document.getElementById('email') as HTMLInputElement).value
    let senha = (document.getElementById('pass') as HTMLInputElement).value

    if (email == localStorage.getItem('email') && senha == localStorage.getItem('senha')) {
      console.log("OK!")
      window.location.href="/explore"
    }

    else {
      alert("Usuário ou senha incorretos!")
    }

  }

  constructor() { }

  ngOnInit() {
  }

}