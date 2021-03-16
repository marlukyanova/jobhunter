import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobAppListComponent } from './job-app-list/job-app-list.component';
import { JobAppFormComponent } from './job-app-form/job-app-form.component';
import { JobStageItemComponent } from './job-stage-form/job-stage-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: JobAppListComponent },
  // { path: '', component: LoginComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'jobapp', component: JobAppListComponent},
  { path: 'jobapp/:id', component: JobAppFormComponent },
  { path: 'jobapp/new', component: JobAppFormComponent },
  { path: 'jobapp/:id/stage/:stageid', component: JobStageItemComponent },
  { path: 'jobapp/:id/stage/new', component: JobStageItemComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
