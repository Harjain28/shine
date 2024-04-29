import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoGstComponent } from './no-gst.component';

describe('NoGstComponent', () => {
  let component: NoGstComponent;
  let fixture: ComponentFixture<NoGstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoGstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
