import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangementDeMotPassePage } from './changement-de-mot-passe.page';

describe('ChangementDeMotPassePage', () => {
  let component: ChangementDeMotPassePage;
  let fixture: ComponentFixture<ChangementDeMotPassePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangementDeMotPassePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangementDeMotPassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
