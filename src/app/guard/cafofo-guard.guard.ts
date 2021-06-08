import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {CafofoHomeService} from '../services/cafofo-home.service';

@Injectable({
  providedIn: 'root'
})
export class GuardCafofoGuard implements CanActivate {
  constructor(private cafofoHomeService: CafofoHomeService, private router: Router){}
  async canActivate(){
    let login = await this.cafofoHomeService.returnLogin();
    if (login) {
      return true;
    }
    return this.router.parseUrl('/login');
  }
}