import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobAppItemComponent } from './job-app-item/job-app-item.component';
import { JobAppListComponent } from './job-app-list/job-app-list.component';
import { JobStageItemComponent } from './job-stage-item/job-stage-item.component';
import { JobStageListComponent } from './job-stage-list/job-stage-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    JobAppItemComponent,
    JobAppListComponent,
    JobStageItemComponent,
    JobStageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
