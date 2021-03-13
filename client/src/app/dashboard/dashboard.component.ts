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
  timesAnalysisData: Data[] = [];
  stagesStatsData: Data[] = [];

  constructor(private apiClient: ApiClientService) {}

  ngOnInit(): void {
    this.getStageAnalysisData();
    this.getStateAnalysisData();
    this.getTimeStats();
    this.getStagesStats();
  }

  getStageAnalysisData(): void {
    this.apiClient.getJobsByStages().subscribe(data => {
      console.log('getStageAnalysisData', data);
      this.stageAnalysisData = data;
    });
  }

  getStateAnalysisData(): void {
    this.apiClient.getJobsByState().subscribe(data => {
      console.log('getStateAnalysisData', data);
      this.stateAnalysisData = data;
    });
  }

  getTimeStats(): void {
    this.apiClient.getTimeStats().subscribe(data => {
      console.log('getTimeStats', data);
      this.timesAnalysisData = data;
    });
  }

  getStagesStats(): void {
    this.apiClient.getStagesStats().subscribe(data => {
      console.log('getStagesStats', data);
      this.stagesStatsData = data;
    });
  }

}
