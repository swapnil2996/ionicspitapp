import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValuePage } from './value.page';

describe('ValuePage', () => {
  let component: ValuePage;
  let fixture: ComponentFixture<ValuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
