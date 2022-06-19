import { TestBed } from '@angular/core/testing';

import { ResztvevoService } from './resztvevo.service';

describe('ResztvevoService', () => {
  let service: ResztvevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResztvevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
