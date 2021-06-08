import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardCafofoGuard } from '../guard/cafofo-guard.guard';
import { HistoricoPage } from './historico.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoPage,
    canActivate: [GuardCafofoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoPageRoutingModule {}