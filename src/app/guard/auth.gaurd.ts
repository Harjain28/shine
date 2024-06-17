import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { Observable } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  private readonly allowedUrls: string[] = [
    "/in/pricing_group",
    "/in/pricing_annual",
    "/in/register",
    "/in/otp",
    "/in/payment_status",
    "/in/register/1",
    "/in/register/2",
    "/in/register/3",
    "/in/register/4",
    "/in/register/5",
    "/in/register/6",
    "/in/otp/1",
    "/in/otp/2",
    "/in/otp/3",
    "/in/otp/4",
    "/in/otp/5",
    "/in/otp/6",
    "/in/confirm_order/1",
    "/in/confirm_order/2",
    "/in/confirm_order/3",
    "/in/confirm_order/4",
    "/in/confirm_order/5",
    "/in/confirm_order/6",
    "/in/bank_statement",
    "/in/report"
  ];

  constructor(private router: Router, private storage: StorageService, private navigationService: NavigationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if (!this.storage.isToken()) {
      //   this.router.navigate(['/in']);
      //   return false;
      // }

      const currentUrl = state.url;
      const isLinkClicked = this.navigationService.isLinkNavigation();
      const lastUrl = sessionStorage.getItem('lastUrl');
      if (!this.allowedUrls.includes(currentUrl) || isLinkClicked || lastUrl === currentUrl) {
        this.navigationService.setLinkClicked(false);
        sessionStorage.setItem('lastUrl', currentUrl); 
        return true;
      } else {
        this.router.navigateByUrl('/in'); 
        return false;
      }
  }
}
