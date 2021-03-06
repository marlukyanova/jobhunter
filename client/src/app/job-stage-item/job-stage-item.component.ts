import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { FormGroup, FormControl } from '@angular/forms';

// import { JobStage } from '../jobstage';

@Component({
  selector: 'app-job-stage-item',
  templateUrl: './job-stage-item.component.html',
  styleUrls: ['./job-stage-item.component.css'],
})
export class JobStageItemComponent implements OnInit {
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

  constructor(
    private route: ActivatedRoute,
    private apiClient: ApiClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobid = this.route.snapshot.params['id'];
    const urlParamStageId = this.route.snapshot.params['stageid'];
    if (urlParamStageId === 'new') {
      this.isAddMode = true;
      this.jobStageForm = new FormGroup({
        stage: new FormControl(''),
        createdat: new FormControl(new Date(Date.now())),
        date: new FormControl(''),
        addinfo: new FormControl(''),
      });
    } else {
      this.stageid = urlParamStageId;
      this.isAddMode = false;
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
    });
  }

  saveChanges(): void {
    if (this.isAddMode) {
      this.createJobStage();
    } else {
      this.updateJobStage();
    }
  }

  createJobStage(): void {
    if (this.jobStageForm !== undefined)
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

  updateJobStage(): void {
    // console.log('updating...');
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
