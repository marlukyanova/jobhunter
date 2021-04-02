import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { JobAppStateService } from '../job-app-state.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { invalidStage, validStage } from '../mocks/mocks';

@Component({
  selector: 'app-job-stage-item',
  templateUrl: './job-stage-form.component.html',
  styleUrls: ['./job-stage-form.component.css'],
})
export class JobStageFormComponent implements OnInit {
  stages: string[] = [
    'Applied',
    'Phone Screen',
    'Home Assignment',
    'Interview',
    'Offer',
  ];

  jobStageForm?: FormGroup;
  stageid?: number;
  jobid?: number;
  isAddMode?: boolean;
  isClosed?: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiClient: ApiClientService,
    private router: Router,
    private jobAppState: JobAppStateService
  ) {}

  ngOnInit(): void {
    this.jobid = this.route.snapshot.params['id'];
    const urlParamStageId = this.route.snapshot.params['stageid'];
    if (urlParamStageId === 'new') {
      this.isAddMode = true;
      this.jobStageForm = new FormGroup({
        stage: new FormControl('', Validators.required),
        createdat: new FormControl(new Date(Date.now())),
        date: new FormControl(''),
        addinfo: new FormControl(''),
      });
    } else {
      this.stageid = urlParamStageId;
      this.isAddMode = false;
      this.isClosed = this.jobAppState.getJobAppState();
      this.getJobStage();
    }
  }

  getJobStage(): void {
    this.apiClient.getJobStage(this.jobid!, this.stageid!).subscribe((data) => {
      console.log(data);
      this.jobStageForm = new FormGroup({
        stage: new FormControl(data.type ? data.type : ''),
        createdat: new FormControl(
          data.createdat ? data.createdat : new Date(Date.now())
        ),
        date: new FormControl(data.date ? data.date : ''),
        addinfo: new FormControl(data.addinfo ? data.addinfo : ''),
      });
      if (this.isClosed) this.jobStageForm.disable();
    });
  }

  saveChanges(): void {
    if (this.jobStageForm) {
      if (this.jobStageForm.value.stage) {
        console.log('boink');
        if (this.isAddMode) {
          this.createJobStage();
        } else {
          this.updateJobStage();
        }
      }
    }
    // console.log(this.isAddMode);
  }

  createJobStage(): void {
    if (this.jobStageForm !== undefined) {
      console.log(this.jobStageForm.value);
      this.apiClient
        .createJobStage(this.jobid!, this.jobStageForm.value)
        .subscribe({
          next: () => {
            this.router.navigateByUrl(`/jobapp/${this.jobid}`);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }

  updateJobStage(): void {
    if (
      this.jobStageForm !== undefined &&
      this.jobid !== undefined &&
      this.stageid !== undefined
    )
      this.apiClient
        .updateJobStage(this.jobid, this.stageid, this.jobStageForm.value)
        .subscribe({
          next: () => {
            this.router.navigateByUrl(
              `/jobapp/${this.jobid}/stage/${this.stageid}`
            );
          },
          error: (error) => {
            console.log(error);
          },
        });
  }

  returnToJobApp(): void {
    this.router.navigateByUrl(`/jobapp/${this.jobid}`);
  }
}
