import { TestBed } from '@angular/core/testing';

import { SzallasService } from './szallas.service';

describe('SzallasService', () => {
  let service: SzallasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SzallasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
