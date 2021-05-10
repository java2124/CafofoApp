import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public cadastrar() {
    let name = (document.getElementById('nome') as HTMLInputElement).value
    let last = (document.getElementById('sobrenome') as HTMLInputElement).value
    let pass = (document.getElementById('senha') as HTMLInputElement).value
    let gen = (document.getElementById('gen') as HTMLInputElement).value
    let email = (document.getElementById('email') as HTMLInputElement).value
    let tel = (document.getElementById('tel') as HTMLInputElement).value

    localStorage.setItem('email', email)
    localStorage.setItem('senha', pass)
    localStorage.setItem('nome', name)
    localStorage.setItem('sobrenome', last)
    localStorage.setItem('genero', gen)
    localStorage.setItem('tel', tel)
    window.location.href='/autenticacao'
  }

  constructor() { }

  ngOnInit() {
  }

}




