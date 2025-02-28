import { TestBed } from '@angular/core/testing';

import { YoutubeMixesService } from './youtube-mixes.service';

describe('YoutubeMixesService', () => {
  let service: YoutubeMixesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeMixesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
