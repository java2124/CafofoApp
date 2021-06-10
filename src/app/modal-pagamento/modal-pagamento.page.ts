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

  /*Informações que são preenchidas no formulário HTML*/
  public name =  null;
  public cpf = null;
  public email = null;
  public cep = null;
  public rua = null;
  public bairro = null;
  public uf = null;



  public formBoleto(){
    this.boleto = true;
  }

  constructor(private modalController: ModalController, private alertController: AlertController, private navCtrl: NavController) { }

  /*método que faz a requisição no web service e retorna o valor nos campos*/
  public async buscarCep(){
      try{
    let response = await fetch(`https://viacep.com.br/ws/${this.cep}/json/`);
    let body = await response.json();
      this.rua = body.logradouro;
      this.bairro = body.bairro;
      this.uf = body.uf;

    }
     catch(ex){
      console.log(ex);
      }
  }

  /* Método que é chamado após o usuario clicar em cancelar no modal pagamento */
  /* Ele manda os parâmetros como nulo para a .ts de reserva (booking)*/
  public cancelPay(){
    this.modalController.dismiss({
        name: this.name,
        cpf: this.cpf,
        email: this.email
    });
  }

  /* Método que é chamado após o usuario clicar em salvar no modal pagamento */
  /* Ele verifica se todas as infos são doferentes de nulo, se não passar na verificação, ele não deixa salvar*/
  /* Ao salvar, ele manda para a .ts de reserva (booking) os valores das variáveis preenchidas no modal*/
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
