import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositiveFactorsComponent } from './positive-factors/positive-factors.component';
import { CriticalIssuesComponent } from './critical-issues/critical-issues.component';
import { MobileCriticalIssuesComponent } from './mobile-critical-issues/mobile-critical-issues.component';
import { MobilePositiveFactorsComponent } from './mobile-positive-factors/mobile-positive-factors.component';

@Component({
  selector: 'app-required-actions',
  standalone: true,
  imports: [CommonModule, CriticalIssuesComponent,PositiveFactorsComponent, MobileCriticalIssuesComponent, MobilePositiveFactorsComponent],
  templateUrl: './required-actions.component.html',
  styleUrls: ['./required-actions.component.scss']
})
export class RequiredActionsComponent {

}
