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
    return plan === "699" ? "1" :
           plan === "1299" ? "2" :
           plan === "2499" ? "3" :
           plan === "1999" ? "4" :
           plan === "3999" ? "5" : "6";
}

redirectToRegister(plans:any) {
  console.log(plans, 'plans');
  let id;
    if (plans) {
        id = this.getPlanId(plans);
    } 
    this.router.navigate(['in/register', id], { queryParamsHandling:"preserve"});
}

redirectToRegister_start(plans:any) {
  console.log(plans, 'plans');
  let id;
    if (plans) {
        id = this.getPlanId(plans);
    } 
    this.router.navigate(['in/register_start', id], { queryParamsHandling:"preserve"});
}

redirectToRegister2(plans:any) {
  console.log(plans, 'plans');
  let id;
    if (plans) {
        id = this.getPlanId(plans);
    } 
    this.router.navigate(['in/register2', id], { queryParamsHandling:"preserve"});
}

redirectToOTP(plans:any) {
  console.log(plans, 'plans');
  let id;
    if (plans) {
        id = this.getPlanId(plans);
    } 
    this.router.navigate(['in/otp', id],  { queryParamsHandling:"preserve"});
}

redirectToPayment(plans:any) {
  console.log(plans, 'plans');
  let id;
    if (plans) {
        id = this.getPlanId(plans);
    } 
    this.router.navigate(['in/confirm_order', id],  { queryParamsHandling:"preserve"});
}

// redirectToBankStatement(plans:any) {
//   console.log(plans, 'plans');
//   let id;
//     if (plans) {
//         id = this.getPlanId(plans);
//     } 
//     this.router.navigate(['in/bank_statement', id],  { queryParamsHandling:"preserve"});
// }
}
