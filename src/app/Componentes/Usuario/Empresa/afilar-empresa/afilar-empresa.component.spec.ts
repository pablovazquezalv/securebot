import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfilarEmpresaComponent } from './afilar-empresa.component';

describe('AfilarEmpresaComponent', () => {
  let component: AfilarEmpresaComponent;
  let fixture: ComponentFixture<AfilarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfilarEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfilarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
