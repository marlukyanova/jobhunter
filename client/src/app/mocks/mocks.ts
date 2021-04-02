import { FormGroup, FormControl } from '@angular/forms';
import { JobApp } from '../jobapp';

const jobApp: JobApp = {
  id: 1,
  position: 'Tea Boi',
  company: 'Codeworks',
  description: 'Know the orders',
  stage: 'Passive',
  source: '',
  state: 'Applied',
  addinfo: '',
  closedreason: '',
  createdat: 92837464812,
  appliedat: 92837464812,
  closedat: null,
};

const invalidStage = new FormGroup({
  stage: new FormControl(''),
  createdat: new FormControl(new Date(Date.now())),
  date: new FormControl(''),
  addinfo: new FormControl(''),
})

const validStage = new FormGroup({
  stage: new FormControl('valid'),
  createdat: new FormControl(new Date(Date.now())),
  date: new FormControl(''),
  addinfo: new FormControl(''),
})


export {jobApp, invalidStage, validStage}
