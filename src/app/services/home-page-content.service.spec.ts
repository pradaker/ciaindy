import { TestBed } from '@angular/core/testing';

import { HomePageContentService } from './home-page-content.service';

describe('HomePageContentService', () => {
  let service: HomePageContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
