import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../api-client.service';

import { JobStage } from '../jobstage';

@Component({
  selector: 'app-job-stage-item',
  templateUrl: './job-stage-item.component.html',
  styleUrls: ['./job-stage-item.component.css']
})
export class JobStageItemComponent implements OnInit {

  jobStage?: JobStage;

  constructor(
    private route: ActivatedRoute,
    private apiClient: ApiClientService
  ) { }

  ngOnInit(): void {
    this.getJobStage();
  }

  getJobStage(): void {
    this.route.params.forEach((params: Params) => {
      const jobid = +params.id;
      const stageid = +params.stageid;
      this.apiClient.getJobStage(jobid, stageid).subscribe(data => {
      console.log(data);
      this.jobStage = data;
    });
  });
  }

}
