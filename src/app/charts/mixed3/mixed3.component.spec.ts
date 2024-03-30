import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mixed3Component } from './mixed3.component';

describe('Mixed3Component', () => {
  let component: Mixed3Component;
  let fixture: ComponentFixture<Mixed3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Mixed3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mixed3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
