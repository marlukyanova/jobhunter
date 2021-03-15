import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { JobAppFormComponent } from './job-app-form.component';
import { JobApp } from '../jobapp';
import { ApiClientService } from '../api-client.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

describe('JobAppFormComponent', () => {
  let component: JobAppFormComponent;
  let fixture: ComponentFixture<JobAppFormComponent>;
  // let apiClientService: ApiClientService;
  // let mockApiClientServiceSpy: jasmine.SpyObj<ApiClientService>;
  // let de: DebugElement;
  let mockJobAppForm = new FormGroup({
    position: new FormControl('Mock Position'),
    company: new FormControl('Mock Company'),
    description: new FormControl(''),
    appliedat: new FormControl(new Date(Date.now())),
    state: new FormControl('Passive'),
    stage: new FormControl('Applied'),
    source: new FormControl(''),
    addinfo: new FormControl(''),
    closedat: new FormControl(),
    closedreason: new FormControl(''),
  });

  let mockJobApp = new JobApp();
  mockJobApp = {
    id: 123,
    createdat: 12312,
    position: ' some position',
    company: 'a Mock company',
    description: '',
    appliedat: 35453454,
    state: 'string',
    stage: 'string',
    source: 'string',
    addinfo: '',
    closedat: 35453454,
    closedreason: 'string',
  };

  let h1: HTMLElement;
  let button: HTMLElement;

  beforeEach(async () => {
    // const spy = jasmine.createSpyObj('ApiClientService', [
    //   'createJobApp',
    //   'getJobApp',
    // ]);

    await TestBed.configureTestingModule({
      declarations: [JobAppFormComponent],
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule,
        HttpClientTestingModule,
      ],
      // providers: [
      //   ApiClientService,
      //   { provide: ApiClientService, useValue: spy },
      // ],
    });

    // apiClientService = TestBed.inject(ApiClientService);
    // mockApiClientServiceSpy = TestBed.inject(
    //   ApiClientService
    // ) as jasmine.SpyObj<ApiClientService>;
    fixture = TestBed.createComponent(JobAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('when in add mode saveChanges button should call createJobApp, when not in addMode it should call updateJobApp', () => {
    component.jobAppForm = mockJobAppForm;
    component.isAddMode = true;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.save-changes-button'));
    spyOn(component, 'createJobApp');
    de.nativeElement.click();
    expect(component.createJobApp).toHaveBeenCalled();
    component.isAddMode = false;
    fixture.detectChanges();
    spyOn(component, 'updateJobApp');
    de.nativeElement.click();
    expect(component.updateJobApp).toHaveBeenCalled();
  });
});
