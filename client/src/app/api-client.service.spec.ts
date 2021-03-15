import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiClientService } from './api-client.service';
import mocks from './mocks/mocks';

describe('ApiClientService', () => {
  let service: ApiClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiClientService],
    });
    service = TestBed.inject(ApiClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be truthy', () => {
    expect(service.getAllJobApps).toBeTruthy();
  });

  it('#getAllJobApps should use correct URL and method', () => {
    service.getAllJobApps().subscribe();
    const req = httpMock.expectOne(`${service.baseURL}/jobapp`);
    expect(req.request.method).toBe('GET');
  });

  it('#getJobStage should use correct URL and method', () => {
    const dummyJobApp = {
      jobappid: 2,
      jobstage: 1,
    };
    service.getJobStage(dummyJobApp.jobappid, dummyJobApp.jobstage).subscribe();
    const req = httpMock.expectOne(
      `${service.baseURL}/jobapp/${dummyJobApp.jobappid}/stage/${dummyJobApp.jobstage}`
    );
    expect(req.request.method).toBe('GET');
  });

  it('#createJobApp should use correct URL and method and be only called once', () => {
    service.createJobApp(mocks).subscribe();
    const req = httpMock.expectOne(`${service.baseURL}/jobapp`);
    expect(req.request.method).toBe('POST');
  });
});
