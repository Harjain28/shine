import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Buffer } from "buffer";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  

  constructor() {
  }

  removeItem() {
    localStorage.removeItem('reqData');
    localStorage.removeItem('popupData');
     sessionStorage.removeItem('reloginUpdates');
     localStorage.removeItem('text');
     localStorage.removeItem('plan');
     localStorage.removeItem('filteredPlan');
     localStorage.removeItem('isV3');
     localStorage.removeItem('userMobileNumber');
     localStorage.removeItem('state');
     localStorage.removeItem('transID');
     localStorage.removeItem('token');


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



} 