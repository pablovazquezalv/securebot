import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposcarrosComponent } from './tiposcarros.component';

describe('TiposcarrosComponent', () => {
  let component: TiposcarrosComponent;
  let fixture: ComponentFixture<TiposcarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposcarrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposcarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
