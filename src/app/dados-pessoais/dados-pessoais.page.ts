import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.page.html',
  styleUrls: ['./dados-pessoais.page.scss'],
})
export class DadosPessoaisPage implements OnInit {

  public salvar(){
    console.log('Alterações salvas com sucesso!');
  }

  constructor() { }

  ngOnInit() {
  }

}
