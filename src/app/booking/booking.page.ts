import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  public nameHouse = 'Casa Floresta Encantada';
  public descriptionHouse = 'Casa na floresta em São Roque';
  public detailsHouse = '6 camas . 3 banheiros';
  public avaliationHouse = 4.86;

  public optionWork = false;
  public editDate2 = false;
  public finishDate = new Date();
  public initDate = new Date();
  public close = true;
  public editGuest2 = false;
  public qtdGuest = 0;
  public qtdGuestKids = 0;
  public textWork2 = false;
  public savedWork = true;
  public addCupom = false;
  public removeButtonCupom = true;
  public saveGuest = true;

  public priceDay = 70.00;
  public days = Math.abs(this.finishDate.getTime() - this.initDate.getTime());
  public priceTotalDays = this.priceDay * this.days;
  public deductionWeek = 20;
  public deductionWeekTotal = (this.priceTotalDays * (this.deductionWeek * (this.days / 7))) / 100;
  public cleaningFee = 45.00;
  public serviceFee = 60.00;
  public totalCost = (this.priceTotalDays + this.cleaningFee + this.serviceFee) - this.deductionWeekTotal;

  public total1 = this.totalCost;
  public total2 = this.totalCost / 2;
  public total3 = this.totalCost / 3;
  public total4 = this.totalCost / 4;
  public total5 = this.totalCost / 5;

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
  }

  public saveWork(){
    this.savedWork = false;
    console.log('Motivo da viagem salvo no banco de dados');
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
    this.saveGuest = false;
  }

  constructor(private alertController: AlertController) { }

  public async booking(){
    const alert = await this.alertController.create({
      header: 'Yay!',
      message: 'Reserva concluída!',
      buttons: ['OK']
    });
    alert.present();
    console.log('Reserva a ser incluída no banco de dados');
  }

  public  async moreInfo(){
    const alert = await this.alertController.create({
      header: 'Informações de preço',
      subHeader: 'Por que pago uma Taxa de Serviço?',
      message: 'Isso nos ajuda a manter nossa plataforma e a oferecer serviços como atendimento 24 horas por dia durante a sua viagem.',
      buttons: ['Sair']
    });
    alert.present();
  }

   ngOnInit() {
  }

}
