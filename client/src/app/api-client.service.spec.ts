import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { JobApp } from './jobapp';
import { ApiClientService } from './api-client.service';

export const mockJobApps: JobApp[] = require('./mocks/jobapps');

describe('ApiClientService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiClientService],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiClientService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('random should should provide data', () => {
    service.getAllJobApps().subscribe((jobapps: JobApp[]) => {
      expect(jobapps).not.toBe(null);
      expect(JSON.stringify(jobapps)).toEqual(JSON.stringify(mockJobApps));
    });

    const req = httpTestingController.expectOne(
      `https://dog.ceo/api/breeds/image/random`
    );

    req.flush(mockJobApps);
  });
});
