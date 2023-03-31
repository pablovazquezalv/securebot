import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcarroComponent } from './crearcarro.component';

describe('CrearcarroComponent', () => {
  let component: CrearcarroComponent;
  let fixture: ComponentFixture<CrearcarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearcarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearcarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
