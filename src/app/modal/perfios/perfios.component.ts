import { ChangeDetectorRef, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, take, timer } from 'rxjs';

@Component({
  selector: 'app-perfios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfios.component.html',
  styleUrls: ['./perfios.component.scss']
})
export class PerfiosComponent {

  constructor(      private cdr: ChangeDetectorRef,
    ){}
  currentIndex = 0;

  @ViewChild("progressContainer", { static: false }) progressContainer:
  | ElementRef
  | undefined;
@ViewChild("progressBar", { static: false }) progressBar:
  | ElementRef
  | undefined;
@ViewChild("progressText", { static: false }) progressText:
  | ElementRef
  | undefined;

  @Inject(PLATFORM_ID) private platformId!: Object

  progressCount!: Subscription;
  istimers!: boolean;
  ncjcount: number = 60;
  tick = 1000;
  paramsObject: any;
  iframeUrl!: string;



  progress = 0;
  progressInterval: any;
  loaderContent:any = [
    'Over 300,000 SMEs have confidently chosen us as their trusted financing ally!',
    'All eligible SMEs experience significantly higher loan approval rates when they apply through us!',
    'Almost 70% of SMEs coming from your city receive their first offer within a week of document submission with us!',
    'We are able to negotiate better rates for 90% of borrowers from your sector!!!!!!!!!.',
     'If you own property, you may be eligible for a Loan Against Property which has 50% lower EMIs.'
   ];

  isChecked!: boolean;
  filteredStatemenetObject: any;
  dealId: any;

  ngAfterViewInit(): void {
    // this.isBrowser = isPlatformBrowser(this.platformId);
       this.counters();
       setInterval(() => {
         this.currentIndex = (this.currentIndex + 1) % this.loaderContent.length();
       }, 5000);
       this.progressInterval = setInterval(() => {
         this.updateProgress();
       }, 100);
        
 
     this.cdr.detectChanges();
   }

  counters() {
    this.ncjcount = 30;
    this.progressCount = timer(0, this.tick)
      .pipe(take(this.ncjcount))
      .subscribe(() => {
        --this.ncjcount;
        if (this.ncjcount === 0) {
          this.istimers = false;
          this.progressCount.unsubscribe();
        }
      });
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }

  updateProgress() {
    this.progress += 1;

    if (this.progressBar && this.progressBar.nativeElement) {
      this.progressBar.nativeElement.style.transform = `rotate(${
        this.progress * 3.6
      }deg)`;
    }

    if (this.progressText && this.progressText.nativeElement) {
      this.progressText.nativeElement.innerText = `${this.progress}%`;
    }

    if (this.progress % 1 === 0) {
      const a = document.createElement("div");
      a.style.cssText = `position: absolute; width: 3px; height: 100%; border-top: 65px solid #12BA9B; left: 49%; top: 0%; transform: rotate(${
        this.progress * 3.6
      }deg);`;

      if (this.progressContainer && this.progressContainer.nativeElement) {
        this.progressContainer.nativeElement.appendChild(a);
      }

    }

    if (this.progress >= 100) {
      clearInterval(this.progressInterval);
    }
  }

}