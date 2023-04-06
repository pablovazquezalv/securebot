import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesModificarComponent } from './roles-modificar.component';

describe('RolesModificarComponent', () => {
  let component: RolesModificarComponent;
  let fixture: ComponentFixture<RolesModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
