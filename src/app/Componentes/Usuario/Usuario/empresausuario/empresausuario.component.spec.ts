import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresausuarioComponent } from './empresausuario.component';

describe('EmpresausuarioComponent', () => {
  let component: EmpresausuarioComponent;
  let fixture: ComponentFixture<EmpresausuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresausuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
