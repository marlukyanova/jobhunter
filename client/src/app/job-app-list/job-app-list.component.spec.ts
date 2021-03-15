import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { JobAppListComponent } from './job-app-list.component';
import { of } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiClientService } from '../api-client.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
const mockJobAppsUnsorted = require('../mocks/jobapps-unsorted.json');
const mockJobAppsSorted = require('../mocks/jobapps-sorted.json');

describe('JobAppListComponent', () => {
  let component: JobAppListComponent;
  let fixture: ComponentFixture<JobAppListComponent>;
  let mockApiClientService: any;
  let mockGetJobApps: any;

  beforeEach(async () => {
    mockGetJobApps = jasmine.createSpyObj(['getJobApps']);
    mockApiClientService = jasmine.createSpyObj(['getAllJobApps']);
    mockApiClientService.getAllJobApps.and.returnValue(of(mockJobAppsUnsorted));

    await TestBed.configureTestingModule({
      declarations: [JobAppListComponent],
      imports: [
        HttpClientTestingModule,
        MatPaginatorModule,
        MatSortModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: ApiClientService, useValue: mockApiClientService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create JobAppListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllJobApps from API Client upon initialisation', fakeAsync(() => {
    component.ngOnInit();
    expect(mockApiClientService.getAllJobApps).toHaveBeenCalled();
  }));

  it('should sort the job applications by ID', fakeAsync(() => {
    expect(component.jobapps).toEqual(mockJobAppsSorted);
  }));

  it('should redirect to JobAppItemComponent when Add JobApp button clicked', fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('.add')).nativeElement;
    button.click();
    tick();
    expect();
  }));
});
