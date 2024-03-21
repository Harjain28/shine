import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureauLinkPopupComponent } from './bureau-link-popup.component';

describe('BureauLinkPopupComponent', () => {
  let component: BureauLinkPopupComponent;
  let fixture: ComponentFixture<BureauLinkPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureauLinkPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BureauLinkPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
