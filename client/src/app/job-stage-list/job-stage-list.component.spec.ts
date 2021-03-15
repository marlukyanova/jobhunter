import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStageListComponent } from './job-stage-list.component';

describe('JobStageListComponent', () => {
  let component: JobStageListComponent;
  let fixture: ComponentFixture<JobStageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobStageListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
