import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  ngOnInit() {
  }

  constructor(private alertController: AlertController) { }

  public async detalhes(){
    const alert = await this.alertController.create({
      header: 'Deseja seguir para o pagamento?',
      buttons: ['Sim']
      });
      alert.present();
 }

 public async voltar(){
  const alert = await this.alertController.create({
    header: 'Deseja voltar ao explorar?',
    buttons: ['Sim']
    });
    alert.present();
  }

}