import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterMobileComponent } from './enter-mobile.component';

describe('EnterMobileComponent', () => {
  let component: EnterMobileComponent;
  let fixture: ComponentFixture<EnterMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EnterMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
