import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaOpcionesComponent } from './empresa-opciones.component';

describe('EmpresaOpcionesComponent', () => {
  let component: EmpresaOpcionesComponent;
  let fixture: ComponentFixture<EmpresaOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaOpcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
