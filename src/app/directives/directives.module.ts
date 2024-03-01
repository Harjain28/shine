import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XsHideDirective } from './xs-hide.directive';
import {  XsShowDirective } from './xx-show.directive';
import { WebOtpDirective } from './web-otp-directive.directive';
import { FormatAmountDirective } from './format-amount.directive';



@NgModule({
  declarations: [
    XsHideDirective,
    XsShowDirective,
    WebOtpDirective,
    FormatAmountDirective,
  ],

  imports: [
    CommonModule
  ],
  
  exports: [
  XsHideDirective, 
  XsShowDirective
],

})
export class DirectivesModule { }
