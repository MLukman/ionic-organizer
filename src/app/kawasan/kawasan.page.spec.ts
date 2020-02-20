import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KawasanPage } from './kawasan.page';

describe('KawasanPage', () => {
  let component: KawasanPage;
  let fixture: ComponentFixture<KawasanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KawasanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KawasanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
