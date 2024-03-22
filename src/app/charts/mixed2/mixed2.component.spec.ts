import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mixed2Component } from './mixed2.component';

describe('Mixed2Component', () => {
  let component: Mixed2Component;
  let fixture: ComponentFixture<Mixed2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ Mixed2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mixed2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
