import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnlineOrderPage } from './online-order.page';

describe('OnlineOrderPage', () => {
  let component: OnlineOrderPage;
  let fixture: ComponentFixture<OnlineOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineOrderPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
