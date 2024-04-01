import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbabilityOfLoanComponent } from './probability-of-loan.component';

describe('ProbabilityOfLoanComponent', () => {
  let component: ProbabilityOfLoanComponent;
  let fixture: ComponentFixture<ProbabilityOfLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProbabilityOfLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbabilityOfLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
