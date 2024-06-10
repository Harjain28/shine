import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredActionsComponent } from './required-actions.component';

describe('RequiredActionsComponent', () => {
  let component: RequiredActionsComponent;
  let fixture: ComponentFixture<RequiredActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RequiredActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
