import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosusuariodatosComponent } from './autosusuariodatos.component';

describe('AutosusuariodatosComponent', () => {
  let component: AutosusuariodatosComponent;
  let fixture: ComponentFixture<AutosusuariodatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosusuariodatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutosusuariodatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
