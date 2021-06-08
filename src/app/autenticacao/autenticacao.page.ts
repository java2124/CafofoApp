import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController} from '@ionic/angular';
import {CafofoHomeService} from '../services/cafofo-home.service';


@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoPage {

  public email;
  public senha;

  constructor(private alertController: AlertController, private cafofoHomeService:CafofoHomeService, private router: Router ) {}

  public entrar(){
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.senha = (document.getElementById('pass') as HTMLInputElement).value;

    if (this.email === localStorage.getItem('email') && this.senha === localStorage.getItem('senha')) {
      this.cafofoHomeService.oklogin(this.email);
      this.router.navigateByUrl('/explore');
    }

    else {
      this.alertErro();
    }
  }

  public async alertErro(){
    const alert = await this.alertController.create({
      header: 'Que pena!',
      message: 'Usuário ou senha incorretos!',
      buttons: ['OK']
    });
    alert.present();
  }
}