import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorEmpresasComponent } from './buscador-empresas.component';

describe('BuscadorEmpresasComponent', () => {
  let component: BuscadorEmpresasComponent;
  let fixture: ComponentFixture<BuscadorEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
