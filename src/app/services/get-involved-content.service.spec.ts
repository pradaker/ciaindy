import { TestBed } from '@angular/core/testing';

import { GetInvolvedContentService } from './get-involved-content.service';

describe('GetInvolvedContentService', () => {
  let service: GetInvolvedContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInvolvedContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
