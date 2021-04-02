import { Component, OnInit } from '@angular/core';

import { ApiClientService } from '../api-client.service';
import { Data } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
      this.stageAnalysisData = data;}
    );
  }

  getStateAnalysisData(): void {
    this.apiClient.getJobsByState().subscribe(data => {
      this.stateAnalysisData = data;
    });
  }

  getTimeStats(): void {
    this.apiClient.getTimeStats().subscribe(data => {
      this.timesAnalysisData = data;
    });
  }

  getStagesStats(): void {
    this.apiClient.getStagesStats().subscribe(data => {
      this.stagesStatsData = data;
    });
  }

}
