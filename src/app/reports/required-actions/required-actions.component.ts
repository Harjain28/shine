import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositiveFactorsComponent } from './positive-factors/positive-factors.component';
import { CriticalIssuesComponent } from './critical-issues/critical-issues.component';
import { MobileCriticalIssuesComponent } from './mobile-critical-issues/mobile-critical-issues.component';
import { MobilePositiveFactorsComponent } from './mobile-positive-factors/mobile-positive-factors.component';
import { reportStatciData } from 'src/app/JsonFiles/reportpageStaticData';

@Component({
  selector: 'app-required-actions',
  standalone: true,
  imports: [
    CommonModule,
    CriticalIssuesComponent,
    PositiveFactorsComponent,
    MobileCriticalIssuesComponent,
    MobilePositiveFactorsComponent,
  ],
  templateUrl: './required-actions.component.html',
  styleUrls: ['./required-actions.component.scss'],
})
export class RequiredActionsComponent implements OnInit {
  @ViewChild('criticalSection') criticalSection!: ElementRef;
  @ViewChild('positiveSection') positiveSection!: ElementRef;

  activeTab: number = 1;
  summary_section:any;
  summary_section_Data: any;
  reportsData: any;
  bankingSummary: any;
  bureauSummary: any;
  gstSummary: any;
  imgUrlDesktop: any;
  imgUrlMobile: any;
  rankingSection: any;
  banking: any;
  bureau: any;
  gst: any;

  @Input() ActionReqReportsData: any;

  ngOnInit(): void {
    this.summary_section = reportStatciData;
    this.summary_section_Data = this.summary_section?.summary_section;
    this.reportsData = this.ActionReqReportsData?.report;

    this.banking = this.reportsData?.bankingSummary;
    this.bureau = this.reportsData?.bureauSummary;
    this.gst = this.reportsData?.gstSummary;


    //rankingSection
    this.rankingSection = reportStatciData?.summary_section;
    const compareStage = this.rankingSection?.ranking_card?.ranking_images.find(
      (image: { stage: any }) => image.stage === this.reportsData?.currentStage
    );
    if (compareStage) {
      this.imgUrlDesktop = compareStage.desktop;
      this.imgUrlMobile = compareStage.mobile;
    }
  }

  setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  scrollToSection(section: string): void {
    let targetSection: HTMLElement | null = null;
    if (section === 'critical') {
      targetSection = this.criticalSection?.nativeElement;
      this.activeTab = 1;
    } else if (section === 'positive') {
      targetSection = this.positiveSection?.nativeElement;
      this.activeTab = 2;
    }
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
