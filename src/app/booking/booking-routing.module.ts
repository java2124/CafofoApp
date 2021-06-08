import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardCafofoGuard } from '../guard/cafofo-guard.guard';
import { BookingPage } from './booking.page';

const routes: Routes = [
  {
    path: ':id',
    component: BookingPage,
    canActivate: [GuardCafofoGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingPageRoutingModule {}