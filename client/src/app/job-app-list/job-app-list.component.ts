import { Component, OnInit } from '@angular/core';

import { ApiClientService } from '../api-client.service';
import { JobApp } from '../jobapp';

@Component({
  selector: 'app-job-app-list',
  templateUrl: './job-app-list.component.html',
  styleUrls: ['./job-app-list.component.css']
})
export class JobAppListComponent implements OnInit {

  jobapps: JobApp[] = [];

  displayedColumns: string[] = ['position', 'company', 'appliedat', 'state', 'stage'];
  dataSource = this.jobapps;

  constructor(private apiClient: ApiClientService) { }

  ngOnInit(): void {
    this.getJobApps();
  }

  getJobApps(): void {
    this.apiClient.getAllJobApps().subscribe(data => {
      this.jobapps = data;
      // console.log(this.jobapps);
      this.dataSource = this.jobapps;
      // this.jobapps = this.topics.sort((a, b) =>  b.votes - a.votes);
    });
  }

}
