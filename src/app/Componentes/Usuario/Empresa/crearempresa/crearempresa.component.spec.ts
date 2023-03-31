import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearempresaComponent } from './crearempresa.component';

describe('CrearempresaComponent', () => {
  let component: CrearempresaComponent;
  let fixture: ComponentFixture<CrearempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
