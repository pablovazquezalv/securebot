import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercarroespecificoComponent } from './vercarroespecifico.component';

describe('VercarroespecificoComponent', () => {
  let component: VercarroespecificoComponent;
  let fixture: ComponentFixture<VercarroespecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercarroespecificoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VercarroespecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
