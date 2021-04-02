import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { JobAppStateService } from '../job-app-state.service';
import { FormGroup, FormControl } from '@angular/forms';

import { JobStage } from '../jobstage';

@Component({
  selector: 'app-job-app-item',
  templateUrl: './job-app-item.component.html',
  styleUrls: ['./job-app-item.component.css'],
})
export class JobAppItemComponent implements OnInit {
  states: string[] = ['Passive', 'Active', 'Closed'];
  stages: string[] = [
    'Applied',
    'Phone Screen',
    'Home Assignment',
    'Interview',
    'Offer',
  ];

  jobAppForm?: FormGroup;

  appstages: JobStage[] = [];
  jobid?: number;
  isAddMode?: boolean;
  isClosed?: boolean;

  constructor(
    private route: ActivatedRoute,
    private apiClient: ApiClientService,
    private router: Router,
    private jobAppState: JobAppStateService,
  ) {}

  ngOnInit(): void {
    const urlParam = this.route.snapshot.params['id'];
    if (urlParam === 'new') {
      this.isAddMode = true;
      this.jobAppForm = new FormGroup({
        position: new FormControl(''),
        company: new FormControl(''),
        description: new FormControl(''),
        appliedat: new FormControl(new Date(Date.now())),
        state: new FormControl('Passive'),
        stage: new FormControl('Applied'),
        source: new FormControl(''),
        addinfo: new FormControl(''),
        closedat: new FormControl(),
        closedreason: new FormControl(''),
      });
    } else {
      this.jobid = urlParam;
      this.isAddMode = false;
      this.getJobApp();
      this.getJobAppStages();
    }
  }

  getJobApp(): void {
    this.route.params.forEach((params: Params) => {
      const id = +params.id;
      this.apiClient.getJobApp(id).subscribe((data) => {
        data.state === 'Closed' ? this.isClosed = true : this.isClosed = false;
        this.jobAppForm = new FormGroup({
          position: new FormControl(data.position ? data.position : ''),
          company: new FormControl(data.company ? data.company : ''),
          description: new FormControl(
            data.description ? data.description : ''
          ),
          appliedat: new FormControl(
            data.appliedat ? data.appliedat : new Date(Date.now())
          ),
          state: new FormControl(data.state ? data.state : 'Passive'),
          stage: new FormControl(data.stage ? data.stage : 'Applied'),
          source: new FormControl(data.source ? data.source : ''),
          addinfo: new FormControl(data.addinfo ? data.addinfo : ''),
          closedat: new FormControl(data.closedreason ? data.closedat : ''),
          closedreason: new FormControl(
            data.closedreason ? data.closedreason : ''
          ),
        });
        if (this.isClosed) this.jobAppForm.disable();
        this.jobAppState.addJobAppState(this.isClosed!);
      });
    });
  }

  getJobAppStages(): void {
    this.route.params.forEach((params: Params) => {
      const id = +params.id;
      this.apiClient.getAllJobStages(id).subscribe((data) => {
        this.appstages = data;
      });
    });
  }

  saveChanges(): void {
    if (this.isAddMode) {
      this.createJobApp();
    } else {
      this.updateJobApp();
    }
  }

  createJobApp(): void {
    if (this.jobAppForm !== undefined)
      this.apiClient.createJobApp(this.jobAppForm.value).subscribe((data) => {
        this.redirectTo(['jobapp']);
      });
  }

  updateJobApp(): void {
    if (this.jobAppForm !== undefined && this.jobid !== undefined)
      this.apiClient.updateJobApp(this.jobAppForm.value, this.jobid).subscribe({
        next: () => {
          this.redirectTo(['jobapp', ''+this.jobid!]);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  createStage(): void {
    this.router.navigateByUrl(`/jobapp/${this.jobid}/stage/new`);
  }

  redirectTo(uri: Array<string>): void {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(uri));
  }

}
