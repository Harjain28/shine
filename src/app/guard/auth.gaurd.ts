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
    // "/in/pricing_group",
    "/in/pricing_annual",
    "/in/register",
    "/in/otp",
    "/in/payment_status",
    "/in/confirm_order",
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
        this.navigationService.setLinkClicked(false); // Reset the flag
        sessionStorage.setItem('lastUrl', currentUrl); // Update last accessed URL
        return true;
      } else {
        this.router.navigateByUrl('/in'); // Navigate to the default URL
        return false;
      }
  }
}
