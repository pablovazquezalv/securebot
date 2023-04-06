import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActualizarTelefonoComponent } from './modal-actualizar-telefono.component';

describe('ModalActualizarTelefonoComponent', () => {
  let component: ModalActualizarTelefonoComponent;
  let fixture: ComponentFixture<ModalActualizarTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActualizarTelefonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActualizarTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
