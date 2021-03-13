import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiClientService } from './api-client.service';
import mocks from './mocks/mocks';

describe('ApiClientService', () => {
  let service: ApiClientService;
  let mockJobApp = {
    id: 1,
    position: 'Tea Boi',
    company: 'Codeworks',
    description: 'Know the orders',
    stage: 'Passive',
    source: '',
    state: 'Applied',
    addinfo: '',
    closedreason: '',
    createdat: 92837464812,
    appliedat: 92837464812,
    closedat: null,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be called', () => {
    expect(service.getAllJobApps()).toBeTruthy();
  });
});
