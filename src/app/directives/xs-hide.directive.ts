import { Directive,  Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[xsHide]',
  standalone: true

})
export class XsHideDirective {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {

  }

  ngOnInit() {
    // this.method();
  }

  @Input() set xsHide(val: any){
    this.method(val);
  }


  method(isShow: boolean) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (state.matches && !isShow) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }
}
