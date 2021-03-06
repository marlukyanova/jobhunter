import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JobApp } from './jobapp';
import { JobStage } from './jobstage';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getAllJobApps(): Observable<JobApp[]> {
    return this.http.get<JobApp[]>(`${this.baseURL}/jobapp`);
  }

  getJobApp(id: number): Observable<JobApp> {
    console.log('sending request...');
    return this.http.get<JobApp>(`${this.baseURL}/jobapp/${id}`);
  }

  getAllJobStages(jobappid: number): Observable<JobStage[]> {
    return this.http.get<JobStage[]>(
      `${this.baseURL}/jobapp/${jobappid}/stage`
    );
  }

  getJobStage(jobappid: number, jobstage: number): Observable<JobStage> {
    return this.http.get<JobStage>(
      `${this.baseURL}/jobapp/${jobappid}/stage/${jobstage}`
    );
  }

  createJobApp(jobApp: JobApp): Observable<JobApp> {
    return this.http.post<JobApp>(`${this.baseURL}/jobapp`, jobApp);
  }

  updateJobApp(jobApp: JobApp, id: number): Observable<JobApp> {
    return this.http.put<JobApp>(`${this.baseURL}/jobapp/${id}`, jobApp);
  }

  createJobStage(id: number, jobStage: JobStage): Observable<JobStage> {
    return this.http.post<JobStage>(
      `${this.baseURL}/jobapp/${id}/stage`,
      jobStage
    );
  }

  updateJobStage(
    id: number,
    stageid: number,
    jobStage: JobStage
  ): Observable<JobStage> {
    return this.http.put<JobStage>(
      `${this.baseURL}/jobapp/${id}/stage/${stageid}`,
      jobStage
    );
  }
}
