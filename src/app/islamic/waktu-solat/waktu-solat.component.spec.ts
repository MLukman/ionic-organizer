import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaktuSolatComponent } from './waktu-solat.component';

describe('WaktuSolatComponent', () => {
  let component: WaktuSolatComponent;
  let fixture: ComponentFixture<WaktuSolatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaktuSolatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaktuSolatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
