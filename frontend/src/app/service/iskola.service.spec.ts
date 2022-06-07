import { TestBed } from '@angular/core/testing';

import { IskolaService } from './iskola.service';

describe('IskolaService', () => {
  let service: IskolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IskolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
