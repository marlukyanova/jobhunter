import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobAppListComponent } from './job-app-list/job-app-list.component';
import { JobAppItemComponent } from './job-app-item/job-app-item.component';
import { JobStageItemComponent } from './job-stage-item/job-stage-item.component';
import { JobStageListComponent } from './job-stage-list/job-stage-list.component';

const routes: Routes = [
  {path: '', component: JobAppListComponent},
  {path: 'jobapp/:id', component: JobAppItemComponent},
  {path: 'jobapp/new', component: JobAppItemComponent},
  {path: 'jobapp/:id/stage/:stageid', component: JobStageItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
