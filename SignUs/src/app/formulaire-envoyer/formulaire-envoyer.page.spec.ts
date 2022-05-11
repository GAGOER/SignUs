import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulaireEnvoyerPage } from './formulaire-envoyer.page';

describe('FormulaireEnvoyerPage', () => {
  let component: FormulaireEnvoyerPage;
  let fixture: ComponentFixture<FormulaireEnvoyerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireEnvoyerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireEnvoyerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
