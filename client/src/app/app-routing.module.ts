import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobAppListComponent } from './job-app-list/job-app-list.component';

const routes: Routes = [
  {path: '', component: JobAppListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
