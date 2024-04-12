import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mixed5Component } from './mixed5.component';

describe('Mixed5Component', () => {
  let component: Mixed5Component;
  let fixture: ComponentFixture<Mixed5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Mixed5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mixed5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
