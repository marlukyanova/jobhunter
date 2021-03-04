import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobAppListComponent } from './job-app-list/job-app-list.component';
import { JobAppItemComponent } from './job-app-item/job-app-item.component';

const routes: Routes = [
  {path: '', component: JobAppListComponent},
  {path: 'jobapp/:id', component: JobAppItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
