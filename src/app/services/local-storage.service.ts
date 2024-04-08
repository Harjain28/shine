import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Buffer } from "buffer";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageKey = 'ncjData';
  changes$ = new Subject();

  constructor() {
  }

//   get(key: string): any {
//     if (this.isLocalStorageSupported) {
//       return JSON.parse(localStorage.getItem(key));
//     }
//     return null;
//   }

//   set(key: string, data: any): boolean {
//     if (this.isLocalStorageSupported) {
//       localStorage.setItem(key, JSON.stringify(data));
//       return true;
//     }

//     return false;
//   }

//   remove(val: string): boolean {
//     if (this.isLocalStorageSupported) {
//       localStorage.removeItem(val);
//       this.changes$.next({
//         type: 'remove',
//         val
//       });
//       return true;
//     }

//     return false;
//   }

//   get isLocalStorageSupported(): boolean {
//     return !!localStorage
//   }

  removeItem() {
     localStorage.removeItem('reqData');
     localStorage.removeItem('mobile');
    localStorage.removeItem('fullName');
    localStorage.removeItem('companyName');
    localStorage.removeItem('popupData');
    
   //  localStorage.removeItem('text');
     localStorage.removeItem('isV3');
     localStorage.removeItem('userMobileNumber');
     localStorage.removeItem('state');
  }

//   removeSomeItem() {
//     localStorage.removeItem('stagingJourneyId');
//     localStorage.removeItem('borrowerInfo');
//    localStorage.removeItem('borrowerDetails');
//    localStorage.removeItem('borrowerJourney');
//     localStorage.removeItem('isV3');
//     localStorage.setItem('isSubmit', 'false');
//     localStorage.removeItem('token');
//     localStorage.setItem('isncjSubmit','false');
//    localStorage.removeItem('ncjData');
//  }


//  setNcjData(data: any): void {
//    localStorage.setItem(this.storageKey, JSON.stringify(data));
//  }

//  getNcjData(): any {
//    const storedData = localStorage.getItem(this.storageKey);
//    return storedData ? JSON.parse(storedData) : null;
//  }
} 