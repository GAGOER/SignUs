import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignallementsnontraiterPage } from './signallementsnontraiter.page';

describe('SignallementsnontraiterPage', () => {
  let component: SignallementsnontraiterPage;
  let fixture: ComponentFixture<SignallementsnontraiterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignallementsnontraiterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignallementsnontraiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
