import { TestBed } from '@angular/core/testing';

import { JobAppStateService } from './job-app-state.service';

describe('JobAppStateService', () => {
  let service: JobAppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobAppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
