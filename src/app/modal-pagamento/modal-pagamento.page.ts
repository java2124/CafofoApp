import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

export interface boleto {
  cpf: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-modal-pagamento',
  templateUrl: './modal-pagamento.page.html',
  styleUrls: ['./modal-pagamento.page.scss'],
})
export class ModalPagamentoPage implements OnInit {
  public creditCard = false;
  public debitCard = false;
  public boleto = false;
  public name; 
  public cpf;
  public email;

  public infosBoletos = {}


  public formCredit(){
    this.creditCard = true;
    this.debitCard = false;
    this.boleto = false;
  }

  public formBoleto(){
    this.boleto = true;
    this.creditCard = false;
    this.debitCard = false;
  }

  public formDebit(){
    this.debitCard = true;
    this.boleto = false;
    this.creditCard = false;
  }

  constructor(private modalController: ModalController) { }

  public cancelPay(){
    console.log('Informações inseridas foram deletadas');
    this.modalController.dismiss();
  }

  public savePay(){
    
      console.log('Pagamento Salvo!');
      this.modalController.dismiss();
    
    
  }

  ngOnInit() {
  }

}
