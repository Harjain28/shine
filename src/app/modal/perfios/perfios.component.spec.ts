import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfiosComponent } from './perfios.component';

describe('PerfiosComponent', () => {
  let component: PerfiosComponent;
  let fixture: ComponentFixture<PerfiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PerfiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
