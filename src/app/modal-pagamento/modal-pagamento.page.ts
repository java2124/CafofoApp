import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { BookingPage } from '../booking/booking.page';

@Component({
  selector: 'app-modal-pagamento',
  templateUrl: './modal-pagamento.page.html',
  styleUrls: ['./modal-pagamento.page.scss'],
})
export class ModalPagamentoPage implements OnInit {
  public boleto = false;

  /*armazenamento offline dessas infos*/
  public name =  null;
  public cpf = null;
  public email = null;

  public formBoleto(){
    this.boleto = true;
  }

  constructor(private modalController: ModalController, private alertController: AlertController, private navCtrl: NavController) { }

  public cancelPay(){
    this.modalController.dismiss({
        name: this.name,
        cpf: this.cpf,
        email: this.email
    });
  }

  public async savePay(){
      if (this.name != null && this.cpf != null && this.email != null){
        this.modalController.dismiss({
          name: this.name,
          cpf: this.cpf,
          email: this.email
        });
      }else{
        const alert = await this.alertController.create({
          header: 'Atenção!',
          message: 'Você não preencheu todas as informações',
          buttons: ['Sair']
        });
        alert.present();
      }
  }

  ngOnInit() {
  }

}
