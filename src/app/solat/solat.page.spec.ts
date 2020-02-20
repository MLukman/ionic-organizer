import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolatPage } from './solat.page';

describe('SolatPage', () => {
  let component: SolatPage;
  let fixture: ComponentFixture<SolatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
