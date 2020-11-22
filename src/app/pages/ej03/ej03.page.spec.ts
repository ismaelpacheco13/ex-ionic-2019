import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ej03Page } from './ej03.page';

describe('Ej03Page', () => {
  let component: Ej03Page;
  let fixture: ComponentFixture<Ej03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ej03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ej03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
