import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribtionPlanComponent } from './subscribtion-plan.component';

describe('SubscribtionPlanComponent', () => {
  let component: SubscribtionPlanComponent;
  let fixture: ComponentFixture<SubscribtionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SubscribtionPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribtionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
