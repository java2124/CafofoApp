import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutenticacaoPageRoutingModule } from './autenticacao-routing.module';

import { AutenticacaoPage } from './autenticacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutenticacaoPageRoutingModule
  ],
  declarations: [AutenticacaoPage]
})
export class AutenticacaoPageModule {}
