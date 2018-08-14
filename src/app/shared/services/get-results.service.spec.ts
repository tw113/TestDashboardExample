import { TestBed, inject } from '@angular/core/testing';

import { GetResultsService } from './get-results.service';

describe('GetResultsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetResultsService]
    });
  });

  it('should be created', inject([GetResultsService], (service: GetResultsService) => {
    expect(service).toBeTruthy();
  }));
});
