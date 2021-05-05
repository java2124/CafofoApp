import { Component, OnInit } from '@angular/core';
import { CafofoHomeService } from '../services/cafofo-home.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
  public queryText = '';
  public cidades;

  constructor(private cafofoHomeService: CafofoHomeService) {

   }

   FilterCidade(cid: any){
    const val = cid.target.value;
    if (val && val.trim() !== ''){
      this.cidades = this.cafofoHomeService.all();
      this.cidades = this.cidades.filter((cidade) => {
        return (cidade.locais.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }else{
      this.cidades = this.cafofoHomeService.all();
    }
  }

  ngOnInit() {
  }

}
