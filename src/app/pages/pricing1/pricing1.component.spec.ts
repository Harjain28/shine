import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricing1Component } from './pricing1.component';

describe('Pricing1Component', () => {
  let component: Pricing1Component;
  let fixture: ComponentFixture<Pricing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Pricing1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pricing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
