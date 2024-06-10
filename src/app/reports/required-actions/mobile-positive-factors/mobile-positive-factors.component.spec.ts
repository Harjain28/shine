import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePositiveFactorsComponent } from './mobile-positive-factors.component';

describe('MobilePositiveFactorsComponent', () => {
  let component: MobilePositiveFactorsComponent;
  let fixture: ComponentFixture<MobilePositiveFactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MobilePositiveFactorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePositiveFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
