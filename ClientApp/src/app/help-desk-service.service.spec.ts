import { TestBed } from '@angular/core/testing';

import { HelpDeskServiceService } from './help-desk-service.service';

describe('HelpDeskServiceService', () => {
  let service: HelpDeskServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpDeskServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
