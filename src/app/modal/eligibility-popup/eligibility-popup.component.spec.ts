import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityPopupComponent } from './eligibility-popup.component';

describe('EligibilityPopupComponent', () => {
  let component: EligibilityPopupComponent;
  let fixture: ComponentFixture<EligibilityPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibilityPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligibilityPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
