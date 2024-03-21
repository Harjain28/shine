import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditJourneyPopupComponent } from './credit-journey-popup.component';

describe('CreditJourneyPopupComponent', () => {
  let component: CreditJourneyPopupComponent;
  let fixture: ComponentFixture<CreditJourneyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CreditJourneyPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditJourneyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
