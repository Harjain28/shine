import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildBureauPopupComponent } from './build-bureau-popup.component';

describe('BuildBureauPopupComponent', () => {
  let component: BuildBureauPopupComponent;
  let fixture: ComponentFixture<BuildBureauPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuildBureauPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildBureauPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
