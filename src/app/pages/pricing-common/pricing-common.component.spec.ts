import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCommonComponent } from './pricing-common.component';

describe('PricingCommonComponent', () => {
  let component: PricingCommonComponent;
  let fixture: ComponentFixture<PricingCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PricingCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
