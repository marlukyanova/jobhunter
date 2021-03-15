import { JobStageListComponent } from './job-stage-list.component';

describe('JobStageListComponent', () => {
  let fixture: JobStageListComponent;

  beforeEach(() => {
    fixture = new JobStageListComponent();
  });

  describe('Set up component', () => {
    describe('ngOnChange', () => {
      it('should ', () => {
        // const getJobAppsSpy = jest.spyOn(fixture, 'getJobApps');

        fixture.ngOnInit();

        expect(fixture.getJobApps).toBeCalled();
      });
    });
  });
});
