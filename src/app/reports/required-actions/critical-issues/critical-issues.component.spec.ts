import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalIssuesComponent } from './critical-issues.component';

describe('CriticalIssuesComponent', () => {
  let component: CriticalIssuesComponent;
  let fixture: ComponentFixture<CriticalIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CriticalIssuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriticalIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
