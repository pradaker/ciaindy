import { TestBed } from '@angular/core/testing';

import { HomeownerApplicationService } from './homeowner-application.service';

describe('HomeownerApplicationService', () => {
  let service: HomeownerApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeownerApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
