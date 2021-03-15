import { JobAppListComponent } from './job-app-list.component';
import { MockApiClientService } from '../mocks/mockApiService';
import { ApiClientService } from '../api-client.service';
import { HttpClient } from '@angular/common/http';

jest.mock('../api-client.service', () => MockApiClientService);
// const http = new HttpClient(null);
// ApiClientService.getAllJobs = MockApiClientService;

describe('JobAppListComponent', () => {
  let fixture: JobAppListComponent;
  let apiMock: MockApiClientService;

  beforeEach(() => {
    fixture = new JobAppListComponent(apiMock);
  });

  describe('Set up component', () => {
    describe('ngOnInit', () => {
      it('should call getJobApps', () => {
        const getJobAppsSpy = jest.spyOn(fixture, 'getJobApps');

        fixture.ngOnInit();

        expect(getJobAppsSpy).toBeCalled();
      });
    });
  });
});
