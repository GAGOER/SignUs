import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecapitulatifDuSignallementPage } from './recapitulatif-du-signallement.page';

describe('RecapitulatifDuSignallementPage', () => {
  let component: RecapitulatifDuSignallementPage;
  let fixture: ComponentFixture<RecapitulatifDuSignallementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapitulatifDuSignallementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecapitulatifDuSignallementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
