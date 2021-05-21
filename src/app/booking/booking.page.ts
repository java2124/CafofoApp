import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPagamentoPage } from '../modal-pagamento/modal-pagamento.page';
import { CafofoHomeService } from '../services/cafofo-home.service';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage {


  public id;
  public home;
  public priceDay;
  public days = 5;
  public priceTotalDays;
  public deductionWeek;
  public deductionWeekTotal;
  public cleaningFee = 45.00;
  public serviceFee = 60.00;
  public totalCost;
  public travelWork;
  public result;
  public nameBoleto = null;
  public cpfBoleto = null;
  public emailBoleto = null;

  // tslint:disable-next-line:max-line-length
  constructor( route: ActivatedRoute, private alertController: AlertController, private modalController: ModalController, private cafofohomeService: CafofoHomeService, private navCtrl: NavController) {
       this.id = +route.snapshot.paramMap.get('id');
       this.home = cafofohomeService.getId(this.id);
       this.priceDay = this.home.precoDia;
       this.priceTotalDays = this.priceDay * this.days;
       this.deductionWeek = 20;
       this.deductionWeekTotal = (this.priceTotalDays * (this.deductionWeek * (this.days / 7))) / 100;
       this.totalCost = (this.priceTotalDays + this.cleaningFee + this.serviceFee) - this.deductionWeekTotal;
   }

  public optionWork = false;
  public editDate2 = false;
  public todayDate = new Date().toISOString();
  public initDate = new Date().toISOString();
  public finishDate = new Date().toISOString();
  public close = true;
  public editGuest2 = false;
  public qtdGuest = 0;
  public qtdGuestKids = 0;
  public textWork2 = false;
  public savedWork = true;
  public addWork = true;
  public removeWork = false;
  public addCupom = false;
  public removeButtonCupom = true;
  public saveGuest = true;
  public editAddPay = true;
  public msg1;
  public msg2;




  public addGuest(){
    this.qtdGuest += 1;
  }

  public removeGuest(){
    if (this.qtdGuest > 0){
      this.qtdGuest -= 1;
    }
  }

  public addGuestKids(){
    this.qtdGuestKids += 1;
  }

  public removeGuestKids(){
    if (this.qtdGuestKids > 0){
      this.qtdGuestKids -= 1;
    }
  }

  public clear(){
    this.qtdGuest = 0;
    this.qtdGuestKids = 0;
  }

  public cupom(){
    this.addCupom = true;
    this.removeButtonCupom = false;
  }

  public notCupom(){
    this.removeButtonCupom = true;
    this.addCupom = false;
  }

  public okCupom(){
    console.log('Cupom adicionado!');
  }

  public textWork(){
    this.textWork2 = true;
    this.savedWork = true;
    this.addWork = false;
  }

  public saveWork(){
    this.savedWork = false;
    this.removeWork = true;
  }

  public editDate(){
    this.editDate2 = true;
    this.close = true;
  }



  public editGuest(){
    this.editGuest2 = true;
    this.saveGuest = true;
  }

  public closed(){
    this.close = false;
  }

  public closed2(){
    this.saveGuest = false;
  }

  public async presentModal() {
    this.editAddPay = false;
    const modal = await this.modalController.create({
    component: ModalPagamentoPage
    });
    await modal.present();

    this.result = await modal.onDidDismiss();
    this.nameBoleto = this.result.data.name;
    this.cpfBoleto = this.result.data.cpf;
    this.emailBoleto = this.result.data.email;
    console.log(this.nameBoleto);
  }

  public async presentModal2() {
    const modal = await this.modalController.create({
    component: ModalPagamentoPage
    });
    await modal.present();

    this.result = await modal.onDidDismiss();
    this.nameBoleto = this.result.data.name;
    this.cpfBoleto = this.result.data.cpf;
    this.emailBoleto = this.result.data.email;
  }


  public async booking(){
      /*Aqui deve verificar também se initDate > finishDate e initDate > diaAtual (pode ser uma váriavel inicializada como new Date()*/
      console.log('initDate: ' + this.initDate);
      console.log('finishDate: ' + this.finishDate);
      // tslint:disable-next-line:max-line-length
      if (this.qtdGuest > 0 && this.nameBoleto !== null && this.emailBoleto !== null && this.cpfBoleto !== null && this.initDate< this.finishDate && this.todayDate>= this.initDate){
        this.cafofohomeService.addReserva(this.home.name, this.home.descricao, this.home.precoDia, this.home.locais, this.nameBoleto);
        const alert = await this.alertController.create({
          header: 'Yay!',
          message: 'Reserva concluída!',
          buttons: ['OK']
        });
        alert.present();
      }
      /* Aqui deve verificar se finishDate <= initDate */
      else if (this.qtdGuest <= 0 || this.initDate >= this.finishDate || this.todayDate<this.initDate){
        console.log('InitDate2: ' + this.initDate);
        console.log('FishDate2: ' + this.finishDate);
        const alert = await this.alertController.create({
          header: 'Que pena!',
          message: 'Alguns campos estão preenchidos incorretamente ou não foram preenchidos. Verifique se o check-in e o check-out estão preenchidos corretamente e se a quantidade de hóspedes adultos é maior que 0.',
          buttons: ['OK']
        });
        alert.present();
      } else if (this.nameBoleto === null || this.cpfBoleto === null || this.emailBoleto === null){
      const alert = await this.alertController.create({
        header: 'Que pena!',
        message: 'Adicione as informações para pagamento!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      console.log('Condição Invalida!');
      console.log(this.initDate);
      console.log(this.finishDate);
    }
  }

  public async moreInfo(){
    const alert = await this.alertController.create({
      header: 'Informações de preço',
      subHeader: 'Por que pago uma Taxa de Serviço?',
      message: 'Isso nos ajuda a manter nossa plataforma e a oferecer serviços como atendimento 24 horas por dia durante a sua viagem.',
      buttons: ['Sair']
    });
    alert.present();
  }

}
