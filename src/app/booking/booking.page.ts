import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  public optionWork = false;
  public editHospd = false;
  public editDate2 = false;
  public finishDate = new Date();
  public initDate = new Date();
  public close = true;
  public textWork;

  public editDate(){
    this.editDate2 = true;
    this.close = true;
  }

  public closed(){
    this.close = false;
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


  ngOnInit() {
  }

}
