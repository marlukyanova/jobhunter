import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { JobApp } from '../jobapp';
import { JobStage } from '../jobstage';
import { Data } from '../data';

const jobAppMock = require('./jobapp');
const jobAppsMock = require('./jobapps');
const jobStageMock = require('./jobstage');
const jobStagesMock = require('./jobstages');
const jobAppsByStageMock = require('./jobappsbystage');
const jobAppsByStateMock = require('./jobappsbystate');
const stagesMock = require('./stages');
const timesMock = require('./times');

@Injectable({
  providedIn: 'root',
})
export class MockApiClientService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getAllJobApps(): Observable<JobApp[]> {
    return of(jobAppsMock);
  }

  getJobApp(id: number): Observable<JobApp> {
    // console.log('sending request...');
    return of(jobAppMock);
  }

  getAllJobStages(jobappid: number): Observable<JobStage[]> {
    return of(jobStagesMock);
  }

  getJobStage(jobappid: number, jobstage: number): Observable<JobStage> {
    return of(jobStageMock);
  }

  createJobApp(jobApp: JobApp): Observable<JobApp> {
    return of(jobAppMock);
  }

  updateJobApp(jobApp: JobApp, id: number): Observable<JobApp> {
    return of(jobAppMock);
  }

  createJobStage(id: number, jobStage: JobStage): Observable<JobStage> {
    return of(jobStageMock);
  }

  updateJobStage(
    id: number,
    stageid: number,
    jobStage: JobStage
  ): Observable<JobStage> {
    return of(jobStageMock);
  }

  getJobsByStages(): Observable<Data[]> {
    return of(jobAppsByStageMock);
  }

  getJobsByState(): Observable<Data[]> {
    return of(jobAppsByStateMock);
  }

  getTimeStats(): Observable<Data[]> {
    return of(timesMock);
  }

  getStagesStats(): Observable<Data[]> {
    return of(stagesMock);
  }
}
