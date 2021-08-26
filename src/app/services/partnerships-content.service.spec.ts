import { TestBed } from '@angular/core/testing';

import { PartnershipsContentService } from './partnerships-content.service';

describe('PartnershipsContentService', () => {
  let service: PartnershipsContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartnershipsContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
