import { DashboardComponent } from './dashboard.component';
import { ApiClientService } from '../api-client.service';

jest.mock('../api-client.service');

describe('DashboardComponent', () => {
  let fixture: DashboardComponent;
  let apiMock: ApiClientService;

  beforeEach(() => {
    fixture = new DashboardComponent(apiMock);
  });

  describe('Set up component', () => {
    describe('ngOnInit', () => {
      it('should call getStageAnalysisData', () => {
        const getStageAnalysisDataSpy = jest.spyOn(
          fixture,
          'getStageAnalysisData'
        );

        fixture.ngOnInit();

        expect(getStageAnalysisDataSpy).toBeCalled();
      });

      it('should call getStateAnalysisData', () => {
        const getStateAnalysisDataSpy = jest.spyOn(
          fixture,
          'getStateAnalysisData'
        );

        fixture.ngOnInit();

        expect(getStateAnalysisDataSpy).toBeCalled();
      });

      it('should call getTimeStats', () => {
        const getTimeStatsSpy = jest.spyOn(fixture, 'getTimeStats');

        fixture.ngOnInit();

        expect(getTimeStatsSpy).toBeCalled();
      });

      it('should call getStagesStats', () => {
        const getStagesStatsSpy = jest.spyOn(fixture, 'getStagesStats');

        fixture.ngOnInit();

        expect(getStagesStatsSpy).toBeCalled();
      });
    });
  });
});
