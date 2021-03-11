import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobAppListComponent } from './job-app-list/job-app-list.component';
import { JobAppItemComponent } from './job-app-item/job-app-item.component';
import { JobStageItemComponent } from './job-stage-item/job-stage-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: JobAppListComponent },
  // { path: '', component: LoginComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'jobapp', component: JobAppListComponent},
  { path: 'jobapp/:id', component: JobAppItemComponent },
  { path: 'jobapp/new', component: JobAppItemComponent },
  { path: 'jobapp/:id/stage/:stageid', component: JobStageItemComponent },
  { path: 'jobapp/:id/stage/new', component: JobStageItemComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
