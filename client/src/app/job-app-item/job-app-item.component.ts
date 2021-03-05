import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../api-client.service';
import { FormGroup, FormControl } from '@angular/forms';

// import { JobApp } from '../jobapp';
import { JobStage } from '../jobstage';

@Component({
  selector: 'app-job-app-item',
  templateUrl: './job-app-item.component.html',
  styleUrls: ['./job-app-item.component.css']
})
export class JobAppItemComponent implements OnInit {

  states: string[] = ['Passive', 'Active', 'Closed'];
  stages: string[] = ['Applied', 'Phone Screen', 'Home Assignment', 'Interview', 'Offer'];

  jobAppForm = new FormGroup({
    position: new FormControl(''),
    company: new FormControl(''),
    description: new FormControl(''),
    appliedat: new FormControl(new Date(Date.now())),
    state: new FormControl('Passive'),
    stage: new FormControl('Applied'),
    source: new FormControl(''),
    addinfo: new FormControl(''),
    closedat: new FormControl(),
    closedreason: new FormControl('')
  });

  // jobApp?: JobApp;
  // selectedState =  '';
  // selectedStage = '';
  appstages: JobStage[] = [];
  dataloaded = false;
  jobid?: number;

  constructor(
    private route: ActivatedRoute,
    private apiClient: ApiClientService
  ) { }

  ngOnInit(): void {
    this.getJobApp();
    this.getJobAppStages();
  }

  getJobApp(): void {
    this.route.params.forEach((params: Params) => {
      const id = +params.id;
      this.apiClient.getJobApp(id).subscribe(data => {
      console.log(data);
      this.dataloaded = true;
      // this.jobApp = data;
      // this.selectedState = this.jobApp.state;
      // this.selectedStage = this.jobApp.stage;
      this.jobAppForm = new FormGroup({
        position: new FormControl(data.position ? `${data.position}` : ''),
        company: new FormControl(data.company ?`${data.company}` : ''),
        description: new FormControl(data.description ? `${data.description}` : ''),
        appliedat: new FormControl(data.appliedat ? `${data.appliedat}` : new Date(Date.now())),
        state: new FormControl(data.state ? `${data.state}` : 'Passive'),
        stage: new FormControl(data.stage ? `${data.stage}` : 'Applied'),
        source: new FormControl(data.source ? `${data.source}` : ''),
        addinfo: new FormControl(data.addinfo ? `${data.addinfo}` : ''),
        closedat: new FormControl(data.closedreason ? `${data.closedat}` : ''),
        closedreason: new FormControl(data.closedreason ? `${data.closedreason}` : '')
      });
      this.jobid = id;
    });
  });
  }

  // selectState(event: Event) {
  //   this.selectedState = (event.target as HTMLSelectElement).value;
  // }

  // selectStage(event: Event) {
  //   this.selectedStage = (event.target as HTMLSelectElement).value;
  // }

  getJobAppStages(): void {
    this.route.params.forEach((params: Params) => {
      const id = +params.id;
    this.apiClient.getAllJobStages(id).subscribe(data => {
      // console.log(data)
      this.appstages = data;
    });
  });
  }
 
}
