import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCriticalIssuesComponent } from './mobile-critical-issues.component';

describe('MobileCriticalIssuesComponent', () => {
  let component: MobileCriticalIssuesComponent;
  let fixture: ComponentFixture<MobileCriticalIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MobileCriticalIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileCriticalIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
