import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isLinkClicked: boolean = false;

  constructor(private router:Router) { }

  setLinkClicked(value: boolean): void {
    this.isLinkClicked = value;
  }

  isLinkNavigation(): boolean {
    return this.isLinkClicked;
  }

  setLastUrl(url: string): void {
    sessionStorage.setItem('lastUrl', url);
  }

  getLastUrl(): any {
    return sessionStorage.getItem('lastUrl');
  }

  getPlanId(plan:any) {
    return plan === "999" ? "1" :
           plan === "1299" ? "2" :
           plan === "2499" ? "3" :
           plan === "2999" ? "4" :
           plan === "3999" ? "5" : "6";
}

redirectToPayment(plans:any) {
  console.log(plans, 'plans');
  let id;
    if (plans) {
        id = this.getPlanId(plans);
    } 
    this.router.navigate(['in/confirm_order', id]);
}
}
