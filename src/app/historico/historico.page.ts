import { Component, OnInit } from '@angular/core';
import { CafofoHomeService } from '../services/cafofo-home.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  public historicoReservas;

  constructor(private cafofoHomeService: CafofoHomeService) {
    this.historicoReservas = cafofoHomeService.Reservas();
  }

  public console(){
    console.log(this.historicoReservas);
  }

  ngOnInit() {
  }

}
