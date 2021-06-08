import { Component, OnInit } from '@angular/core';
import { CafofoHomeService } from '../services/cafofo-home.service';
import _ from 'lodash';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage {

  public ShowSearch = false;
  public homes = this.cafofoHomeService.all();
  public nomeCasa = this.cafofoHomeService.getId (1);
  public nomeCasa2 = this.cafofoHomeService.getId (2);
  public nomeCasa3 = this.cafofoHomeService.getId (3);



  public setShowSearch(value: boolean ) {
    this.ShowSearch = value;
  }

  public logoutExplore(){
    this.cafofoHomeService.okLogout();
  }

  constructor(private cafofoHomeService: CafofoHomeService) { }
}