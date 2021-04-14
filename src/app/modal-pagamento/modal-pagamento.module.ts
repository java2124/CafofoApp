import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPagamentoPageRoutingModule } from './modal-pagamento-routing.module';

import { ModalPagamentoPage } from './modal-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPagamentoPageRoutingModule
  ],
  declarations: [ModalPagamentoPage]
})
export class ModalPagamentoPageModule {}
