import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})
export class AutenticacaoPage implements OnInit {

  public email;
  public senha;

  constructor(private alertController: AlertController) {}

  public async entrar(){
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.senha = (document.getElementById('pass') as HTMLInputElement).value;

    if (this.email === localStorage.getItem('email') && this.senha === localStorage.getItem('senha')) {
      console.log('OK!');
      window.location.href = '/explore';
    }

    /*alert que fica na dimensão do dispositivo*/
    else {
      const alert = await this.alertController.create({
        header: 'Que pena!',
        message: 'Usuário ou senha incorretos!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  ngOnInit() {
  }

}
