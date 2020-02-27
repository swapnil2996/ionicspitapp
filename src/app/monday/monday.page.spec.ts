import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MondayPage } from './monday.page';

describe('MondayPage', () => {
  let component: MondayPage;
  let fixture: ComponentFixture<MondayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MondayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
