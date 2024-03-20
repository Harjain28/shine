import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShineHeaderComponent } from './shine-header.component';

describe('ShineHeaderComponent', () => {
  let component: ShineHeaderComponent;
  let fixture: ComponentFixture<ShineHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShineHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
