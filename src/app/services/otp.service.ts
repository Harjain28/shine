import { Injectable } from '@angular/core';

interface CredentialRequestOptions {
  otp: any;
  signal: any;
}

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  constructor() { }

  fetchOtp(timeout?: number): Promise<string> {
    const ac = new AbortController();
    const options: CredentialRequestOptions = {
      otp: { transport: ['sms'] },
      signal: ac.signal
    };

    return new Promise((resolve, reject) => {
      navigator.credentials.get(options)
        .then((otp: any) => resolve(otp.code))
        .catch(err => {
          console.error('Error fetching OTP:', err);
          reject(err);
        });

    //   if (timeout) {
    //     setTimeout(() => {
    //       ac.abort();
    //       reject(new Error('Request timed out'));
    //     }, timeout);
    //   }
    });
  }
}
