import { HostListener, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../services/event.service';
import { StorageService } from '../services/storage.service';
import { Location } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  private readonly pageUrls: string[] = [
    "/in/pricing_group",
    "/in/register",
    "/in/otp",
    "/in/pricing_annual",
    "/in/payment_status",
    "/in/confirm_order",
    "/in/bank_statement",
    "/in/report"
  ];


  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if (this.pageUrls.includes(state.url) ) {
      
      this.router.navigateByUrl('/in');
      return false; 
    }

   

    return true; 
  }

}