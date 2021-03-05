import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JobApp } from './jobapp';
import { JobStage } from './jobstage';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private baseURL = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getAllJobApps(): Observable<JobApp[]> {
    return this.http.get<JobApp[]>(`${this.baseURL}/jobapp`);
  }

  getJobApp(id: number): Observable<JobApp> {
    return this.http.get<JobApp>(`${this.baseURL}/jobapp/${id}`);
  }

  getAllJobStages(jobappid: number): Observable<JobStage[]> {
    return this.http.get<JobStage[]>(`${this.baseURL}/jobapp/${jobappid}/stage`);
  }

  getJobStage(jobappid: number, jobstage: number): Observable<JobStage> {
    return this.http.get<JobStage>(`${this.baseURL}/jobapp/${jobappid}/stage/${jobstage}`);
  }
  // postTopic(topic: Topic): Observable<Topic> {
  //   return this.http.post<Topic>('http://localhost:3000/', topic);
  // }

  // deleteTopic(topic: Topic): void {
  //   // return this.http.delete('http://localhost:3000/', topic);
  // }

}
