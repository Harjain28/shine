import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
interface CredentialRequestOptions {
  otp: any;
  signal: any;
}

@Directive({
  selector: '[appWebOtp]',
  standalone: true

})
export class WebOtpDirective implements OnInit, OnDestroy {
  // Controller to abort the subscription if required.
  private ac: AbortController | null = null;
  private timer: number | null = null;

  @Input('timeout') timeout?: number;

  constructor(private el: ElementRef<HTMLInputElement>) { }

  ngOnInit(): void {
    this.ac = new AbortController();
    
    const options: CredentialRequestOptions = {
      otp: { transport: ['sms'] },
      signal: this.ac.signal
    };

    navigator.credentials.get(options)
      .then((otp: any) => {
        this.el.nativeElement.value = otp.code;
      })
      .catch(err => {
        console.error('Error fetching OTP:', err);
      });

    if (this.timeout) {
      this.timer = window.setTimeout(() => {
        if (this.ac) {
          this.ac.abort();
        }
      }, this.timeout);
    }

  }
  ngOnDestroy(): void {
    if (this.ac) {
      this.ac.abort();
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}