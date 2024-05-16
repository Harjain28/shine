// src/app/services/gtm.service.ts
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GTMService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    if (environment.enableGTM) {
      this.addGTMScript();
    }
  }

  addGTMScript() {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NK3T5Z88';
    this.document.head.appendChild(script);

    const noscript = this.document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NK3T5Z88" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    this.document.body.appendChild(noscript);
  }
}
