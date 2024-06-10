import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveFactorsComponent } from './positive-factors.component';

describe('PositiveFactorsComponent', () => {
  let component: PositiveFactorsComponent;
  let fixture: ComponentFixture<PositiveFactorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PositiveFactorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositiveFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
