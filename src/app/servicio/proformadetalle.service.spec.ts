import { TestBed } from '@angular/core/testing';

import { ProformadetalleService } from './proformadetalle.service';

describe('ProformadetalleService', () => {
  let service: ProformadetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProformadetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
