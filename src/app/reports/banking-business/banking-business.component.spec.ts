import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingBusinessComponent } from './banking-business.component';

describe('BankingBusinessComponent', () => {
  let component: BankingBusinessComponent;
  let fixture: ComponentFixture<BankingBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BankingBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
