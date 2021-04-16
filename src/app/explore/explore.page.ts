import { Component, OnInit } from '@angular/core';

import _ from 'lodash';

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
export class ExplorePage {
  
  public ShowSearch = false;
  
  cidades: Array<{name:String,descricao:String,nota:any,qtdCamas:any,qtdBanheiro:any,precoDia:any,locais:string,foto:string}>;
  allCidades:any;
  queryText:String;
  

  constructor() { 

    this.queryText='';

    this.cidades = [
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
    ];

    this.allCidades=this.cidades;
     
  }

  FilterCidade(cid: any){
    let val = cid.target.value;
    if(val && val.trim() != ''){
      this.cidades = _.values(this.allCidades);
      this.cidades = this.cidades.filter((cidade) => {
        return (cidade.locais.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.cidades = this.allCidades;
    }
  }

 
 
  
  public setShowSearch(value:boolean ) {
    this.ShowSearch = value;
  }  



  

}
