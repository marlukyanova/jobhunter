import { Component, Input, OnChanges } from '@angular/core';

import { JobStage } from '../jobstage';

@Component({
  selector: 'app-job-stage-list',
  templateUrl: './job-stage-list.component.html',
  styleUrls: ['./job-stage-list.component.css'],
})
export class JobStageListComponent implements OnChanges {
  @Input() appstages!: JobStage[];
  @Input() jobid!: number;

  displayedColumns: string[] = ['type', 'createdat', 'date', 'view'];
  dataSource: JobStage[] = [];

  ngOnChanges(): void {
    this.dataSource = this.appstages;
  }
}
