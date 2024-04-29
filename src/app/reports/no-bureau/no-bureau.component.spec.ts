import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBureauComponent } from './no-bureau.component';

describe('NoBureauComponent', () => {
  let component: NoBureauComponent;
  let fixture: ComponentFixture<NoBureauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoBureauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoBureauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
