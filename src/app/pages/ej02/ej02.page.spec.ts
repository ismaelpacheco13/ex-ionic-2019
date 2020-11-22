import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ej02Page } from './ej02.page';

describe('Ej02Page', () => {
  let component: Ej02Page;
  let fixture: ComponentFixture<Ej02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ej02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
