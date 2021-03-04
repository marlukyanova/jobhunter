import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiClientService } from '../api-client.service';

import { JobApp } from '../jobapp';
import { State } from '../state';
import { Stage } from '../stage';
import { JobStage } from '../jobstage';

@Component({
  selector: 'app-job-app-item',
  templateUrl: './job-app-item.component.html',
  styleUrls: ['./job-app-item.component.css']
})
export class JobAppItemComponent implements OnInit {
  states: State[] = [
    {value: 'A', viewValue: 'Active'},
    {value: 'P', viewValue: 'Passive'},
    {value: 'C', viewValue: 'Closed'}
  ];

  stages: Stage[] = [
    {value: 'Applied', viewValue: 'Applied'},
    {value: 'PS', viewValue: 'Phone Screen'},
    {value: 'HA', viewValue: 'Home Assignment'},
    {value: 'I', viewValue: 'Interview'},
    {value: 'O', viewValue: 'Offer'}
  ]

  jobApp?: JobApp;
  selectedState =  '';
  selectedStage = '';
  appstages: JobStage[] = [];

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
      this.jobApp = data;
      this.selectedState = this.jobApp.state;
      this.selectedStage = this.jobApp.stage;
    });
  });
  }

  selectState(event: Event) {
    this.selectedState = (event.target as HTMLSelectElement).value;
  }

  selectStage(event: Event) {
    this.selectedStage = (event.target as HTMLSelectElement).value;
  }

  getJobAppStages(): void {
    this.route.params.forEach((params: Params) => {
      const id = +params.id;
    this.apiClient.getAllJobStages(id).subscribe(data => {
      console.log(data)
      this.appstages = data;
    });
  });
  }

}
