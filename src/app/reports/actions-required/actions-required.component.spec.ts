import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsRequiredComponent } from './actions-required.component';

describe('ActionsRequiredComponent', () => {
  let component: ActionsRequiredComponent;
  let fixture: ComponentFixture<ActionsRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ActionsRequiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
