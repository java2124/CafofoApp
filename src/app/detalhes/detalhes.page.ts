import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CafofoHomeService } from '../services/cafofo-home.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public id;
  public home;


  constructor( route: ActivatedRoute, private cafofoHomeService: CafofoHomeService, private navCtrl: NavController) {

       this.id = +route.snapshot.paramMap.get('id');
       this.home = cafofoHomeService.getId(this.id);
    }

    ngOnInit() {
    }

}
