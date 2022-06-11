import { TestBed } from '@angular/core/testing';

import { SzekcioService } from './szekcio.service';

describe('SzekcioService', () => {
  let service: SzekcioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SzekcioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
