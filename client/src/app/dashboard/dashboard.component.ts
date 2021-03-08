import { Component, OnInit } from '@angular/core';

import { ApiClientService } from '../api-client.service';
import { Data } from '../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  barChartData: Data[] = [];

  constructor(private apiClient: ApiClientService) {}

  ngOnInit(): void {
    this.getBarChartData();
  }

  getBarChartData(): void {
    this.apiClient.getJobsByStages().subscribe(data => {
      // console.log(data);
      this.barChartData = data;}
    );
  }

}
