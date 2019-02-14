import { TestBed } from '@angular/core/testing';

import { ApiconnectorService } from './apiconnector.service';

describe('ApiconnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiconnectorService = TestBed.get(ApiconnectorService);
    expect(service).toBeTruthy();
  });
});
