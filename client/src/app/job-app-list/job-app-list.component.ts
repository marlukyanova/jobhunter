import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { ApiClientService } from '../api-client.service';
import { JobApp } from '../jobapp';

@Component({
  selector: 'app-job-app-list',
  templateUrl: './job-app-list.component.html',
  styleUrls: ['./job-app-list.component.css'],
})
export class JobAppListComponent implements OnInit {
  jobapps: JobApp[] = [];

  displayedColumns: string[] = [
    'position',
    'company',
    'appliedat',
    'state',
    'stage',
    'view',
  ];
  dataSource: any;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private apiClient: ApiClientService) {}

  ngOnInit(): void {
    this.getJobApps();
  }

  getJobApps(): void {
    this.apiClient.getAllJobApps().subscribe((data) => {
      this.jobapps = data.sort((a, b) => b.id - a.id);
      this.dataSource = new MatTableDataSource(this.jobapps);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
