import { TestBed } from '@angular/core/testing';

import { PageContentService } from './home-page-content.service';

describe('PageContentService', () => {
  let service: PageContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
