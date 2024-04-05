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
    "/in/pricing1",
    "/in/register",
    "/in/otp",
    "/in/pricing1",
    "/in/pricing2",
    "/in/payment_status",
    "/in/payment",
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