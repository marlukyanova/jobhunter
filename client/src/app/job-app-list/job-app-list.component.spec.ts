import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
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
  let ApiClientServiceSpy: any;
  let ApplyFilterSpy: any;

  beforeEach(async () => {
    ApiClientServiceSpy = jasmine.createSpyObj(['getAllJobApps']);
    ApiClientServiceSpy.getAllJobApps.and.returnValue(of(mockJobAppsUnsorted));
    ApplyFilterSpy = jasmine.createSpyObj(['applyFilter']);

    await TestBed.configureTestingModule({
      declarations: [JobAppListComponent],
      imports: [
        HttpClientTestingModule,
        MatPaginatorModule,
        MatSortModule,
        NoopAnimationsModule,
      ],
      providers: [{ provide: ApiClientService, useValue: ApiClientServiceSpy }],
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
    expect(ApiClientServiceSpy.getAllJobApps).toHaveBeenCalled();
  }));

  it('should sort the job applications by ID', fakeAsync(() => {
    expect(component.jobapps).toEqual(mockJobAppsSorted);
  }));

  it('should call applyFilter when filter input is given', fakeAsync(() => {
    const jobFilterInput: HTMLInputElement = fixture.debugElement.query(
      By.css('#filter__input')
    ).nativeElement;
    jobFilterInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(ApplyFilterSpy).toHaveBeenCalled();
    });
  }));
});
