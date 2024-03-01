import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormatAmount]',
  standalone: true

})
export class FormatAmountDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    // Remove any non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, '');

    // Format the numeric value with commas
    const formattedValue = this.formatWithCommas(numericValue);

    // Set the formatted value back to the input
    this.el.nativeElement.value = formattedValue;
  }

  private formatWithCommas(value: string): string {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    return parts.join('.');
  }
}
