import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobAppStateService {

  isJobAppClosed?: boolean;
  
  constructor() { }
  
  getJobAppState(): boolean {
    return this.isJobAppClosed!; 
  }

  addJobAppState(isClosed: boolean): void {
    this.isJobAppClosed = isClosed;
  }

}
