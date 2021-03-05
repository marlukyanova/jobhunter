import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { FormGroup, FormControl } from '@angular/forms';

// import { JobStage } from '../jobstage';

@Component({
  selector: 'app-job-stage-item',
  templateUrl: './job-stage-item.component.html',
  styleUrls: ['./job-stage-item.component.css']
})
export class JobStageItemComponent implements OnInit {

  // jobStage?: JobStage;

  jobStageForm = new FormGroup({
    stage: new FormControl(''),
    createdat: new FormControl(new Date(Date.now())),
    date: new FormControl(''),
    addinfo: new FormControl('')
  });

  dataloaded = false;

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
        this.dataloaded = true;
        // this.jobStage = data;
        this.jobStageForm = new FormGroup({
          stage: new FormControl(data.type ? `${data.type}` : ''),
          createdat: new FormControl(data.createdat ? `${data.createdat}` : new Date(Date.now())),
          date: new FormControl(data.date ? `${data.date}` : ''),
          addinfo: new FormControl(data.addinfo ? `${data.addinfo}` : '')
        });
    });
  });
  }

}
