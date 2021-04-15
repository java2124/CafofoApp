import { Component, OnInit } from '@angular/core';
//import { url } from 'node:inspector';
//import { Url } from 'node:url';

type cidades = 'São Roque' | 'Guaruja' | 'Santos' | 'Rio de Janeiro'

interface Acomodacao {
  name: string;
  descricao: string;
  nota: number;
  qtdCamas: number;
  qtdBanheiro: number;
  precoDia: number;
  locais:cidades;
  foto:String
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  public pesquisa;

  public ShowSearch = false;

  public casas: Acomodacao [] = [ 
    {
      name: 'Casa Floresta Encantada',
      descricao: 'Casa na floresta em São Roque',
      nota: 4.86,
      qtdCamas: 6,
      qtdBanheiro: 3,
      precoDia: 70.00,
      locais:'São Roque',
      foto: 'https://images.pexels.com/photos/6249814/pexels-photo-6249814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Casa Rio Pequeno',
      descricao: 'Casa na praia em Rio Pequeno',
      nota: 4.90,
      qtdCamas: 5,
      qtdBanheiro: 2,
      precoDia: 55.00,
      locais:'Guaruja',
      foto: 'https://images.pexels.com/photos/6249814/pexels-photo-6249814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Casa Bosque das Flores',
      descricao: 'Casa na praia em Santos',
      nota: 3.98,
      qtdCamas: 6,
      qtdBanheiro: 3,
      precoDia: 75.00,
      locais:'Santos',
      foto: 'https://images.pexels.com/photos/6249814/pexels-photo-6249814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      name: 'Casa Copacabana',
      descricao: 'Casa na praia em Copacabana',
      nota: 4.98,
      qtdCamas: 6,
      qtdBanheiro: 3,
      precoDia: 75.00,
      locais:'Rio de Janeiro',
      foto: 'https://images.pexels.com/photos/6249814/pexels-photo-6249814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ]


  constructor() { }

  
  public setShowSearch(value:boolean ) {
    this.ShowSearch = value;
  }  
  ngOnInit() {
  }

}
