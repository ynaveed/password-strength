import { TestBed, inject } from '@angular/core/testing';

import { StrengthService } from './strength.service';

describe('StrengthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StrengthService]
    });
  });

  it('should be created', inject([StrengthService], (service: StrengthService) => {
    expect(service).toBeTruthy();
  }));
});
