import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {JobApp} from './jobapp';
import mocks from './mocks/mocks';

import { ApiClientService } from './api-client.service';

describe('ApiClientService', () => {
  let service: ApiClientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiClientService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiClientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('greeting should be hello'), () => {
    expect(service.greet).toBe('hello');
  }
});
