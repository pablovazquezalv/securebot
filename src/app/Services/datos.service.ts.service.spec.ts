import { TestBed } from '@angular/core/testing';

import { DatosServiceTsService } from './datos.service.ts.service';

describe('DatosServiceTsService', () => {
  let service: DatosServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
