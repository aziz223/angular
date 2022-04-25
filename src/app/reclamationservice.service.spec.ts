import { TestBed } from '@angular/core/testing';

import { ReclamationserviceService } from './reclamationservice.service';

describe('ReclamationserviceService', () => {
  let service: ReclamationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
