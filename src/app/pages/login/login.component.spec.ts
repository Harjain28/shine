import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReloginComponent } from 'src/app/modal/relogin/relogin.component';


describe('EnterMobileComponent', () => {
  let component: ReloginComponent;
  let fixture: ComponentFixture<ReloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
