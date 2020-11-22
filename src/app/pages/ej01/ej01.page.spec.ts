import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ej01Page } from './ej01.page';

describe('Ej01Page', () => {
  let component: Ej01Page;
  let fixture: ComponentFixture<Ej01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej01Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ej01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
