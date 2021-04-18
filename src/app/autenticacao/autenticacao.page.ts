import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})
export class AutenticacaoPage implements OnInit {

  public entrar(){
    console.log('Login feito com sucesso!');
  }

  constructor() { }

  ngOnInit() {
  }

}
