import { Component, OnInit } from '@angular/core';

import { ApiClientService } from '../api-client.service';
import { Data } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // barChartData: Array<{title: string, data: Data[]}> = [];
  stageAnalysisData: Data[] = [];
  stateAnalysisData: Data[] = [];

  constructor(private apiClient: ApiClientService) {}

  ngOnInit(): void {
    this.getStageAnalysisData();
    this.getStateAnalysisData();
  }

  getStageAnalysisData(): void {
    this.apiClient.getJobsByStages().subscribe(data => {
      console.log(data);
      this.stageAnalysisData = data;}
      // const stageAnalysisData = {title: 'Stage Analysis', data: data};
      // this.barChartData.push(stageAnalysisData);}
    );
  }

  getStateAnalysisData(): void {
    this.apiClient.getJobsByState().subscribe(data => {
      console.log(data);
      this.stateAnalysisData = data;
      // const stateAnalysisData = {title: 'State Analysis', data: data};
      // this.barChartData.push(stateAnalysisData);
    });
  }

}
