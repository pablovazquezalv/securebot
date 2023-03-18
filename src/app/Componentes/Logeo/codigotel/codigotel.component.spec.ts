import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigotelComponent } from './codigotel.component';

describe('CodigotelComponent', () => {
  let component: CodigotelComponent;
  let fixture: ComponentFixture<CodigotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
