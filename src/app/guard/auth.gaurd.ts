import {  Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot,  Router } from '@angular/router';



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

    if (!this.pageUrls.includes(state.url)) {
       this.router.parseUrl('/page-not-found'); 
    }
   

    return true; 
  }

}