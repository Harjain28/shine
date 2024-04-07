// import { Injectable } from '@angular/core';
// import { NavigationStart, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class NavigationService {
//   private fromPaymentStatusPage: boolean = false;

//   constructor(private router: Router) {
//     this.handleNavigationEvents(); 
//   }

//   handleNavigationEvents() {
//     this.router.events.subscribe((event) => {
//       if (event instanceof NavigationStart) {
//         const currentUrl = event.url;
//         const isToPaymentPage = currentUrl.startsWith('/in/payment');

//         if (isToPaymentPage) {
//           // If navigating to the payment page, reset the flag
//           this.fromPaymentStatusPage = false;
//         } else if (this.fromPaymentStatusPage) {
//           // If not navigating to the payment page and flag is set, remove query param
//           const urlTree = this.router.parseUrl(currentUrl);
//           delete urlTree.queryParams['result'];
//           this.router.navigateByUrl(urlTree.toString(), { replaceUrl: true });
//           return;
//         }

//         // Check if navigation is from payment_status page
//         if (currentUrl.startsWith('/in/payment_status')) {
//           this.fromPaymentStatusPage = true;
//         } else {
//           // Reset flag when navigating away from payment_status page
//           this.fromPaymentStatusPage = false;
//         }
//       }
//     });
//   }
// }
