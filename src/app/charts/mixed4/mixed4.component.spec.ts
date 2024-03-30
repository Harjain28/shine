import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mixed4Component } from './mixed4.component';

describe('Mixed4Component', () => {
  let component: Mixed4Component;
  let fixture: ComponentFixture<Mixed4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Mixed4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mixed4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
