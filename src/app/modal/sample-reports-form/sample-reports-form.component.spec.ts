import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleReportsFormComponent } from './sample-reports-form.component';

describe('SampleReportsFormComponent', () => {
  let component: SampleReportsFormComponent;
  let fixture: ComponentFixture<SampleReportsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SampleReportsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleReportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
