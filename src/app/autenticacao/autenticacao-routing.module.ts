import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutenticacaoPage } from './autenticacao.page';

const routes: Routes = [
  {
    path: '',
    component: AutenticacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutenticacaoPageRoutingModule {}
