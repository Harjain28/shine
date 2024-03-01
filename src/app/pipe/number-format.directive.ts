import { Directive } from '@angular/core';

@Directive({
  selector: '[appNumberFormat]',
  standalone: true
})
export class NumberFormatDirective {


  transform(value: string): string {
    if (!value) return '';

    const cleanedValue = value.replace(/[^0-9]/g, '');
    const parts = cleanedValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    return parts.join('.');
  }
  }    


