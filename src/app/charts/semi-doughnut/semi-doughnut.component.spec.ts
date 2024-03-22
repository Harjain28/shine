import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiDoughnutComponent } from './semi-doughnut.component';

describe('SemiDoughnutComponent', () => {
  let component: SemiDoughnutComponent;
  let fixture: ComponentFixture<SemiDoughnutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SemiDoughnutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
