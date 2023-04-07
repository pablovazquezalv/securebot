import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesEmpresasComponent } from './solicitudes-empresas.component';

describe('SolicitudesEmpresasComponent', () => {
  let component: SolicitudesEmpresasComponent;
  let fixture: ComponentFixture<SolicitudesEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
