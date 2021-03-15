import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStageItemComponent } from './job-stage-item.component';

describe('JobStageItemComponent', () => {
  let component: JobStageItemComponent;
  let fixture: ComponentFixture<JobStageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobStageItemComponent],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
