import { TestBed } from '@angular/core/testing';

import { QazisVlogsService } from './qazis-vlogs.service';

describe('QazisVlogsService', () => {
  let service: QazisVlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QazisVlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
