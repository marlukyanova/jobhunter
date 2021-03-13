import { JobAppListComponent } from './job-app-list.component';
import { ApiClientService } from '../api-client.service';

describe('JobAppListComponent', () => {
  let fixture: JobAppListComponent;
  let apiClientMock: ApiClientService;

  beforeEach(() => {
    fixture = new JobAppListComponent(apiClientMock)
  })

  describe('Set up component', () => {
    describe('ngOnInit', () => {
      it('should call getJobApps', () => {
        const getJobAppsSpy = jest.spyOn(fixture, 'getJobApps');

        fixture.ngOnInit();

        expect(getJobAppsSpy).toHaveBeenCalled();
      });
    });
  });
});
