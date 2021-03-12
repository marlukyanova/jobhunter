'use strict';

import { db } from '../models';
const JobApp = db.JobApp;

export function getAllJobs(req, res) {
  JobApp.findAll()
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `An error occurred while retrieving applications: ${err}`,
      });
    });
}

export function getJobApp(req, res) {
  JobApp.findByPk(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `An error occurred while retrieving application: ${err}`,
      });
    });
}

export async function createJobApp(req, res) {
  const app = {
    position: req.body.position,
    company: req.body.company,
    description: req.body.description,
    state: req.body.state,
    stage: req.body.stage,
    source: req.body.source,
    addinfo: req.body.addinfo,
    closedreason: req.body.closedreason,
    createdat: req.body.createdat,
    appliedat: req.body.appliedat,
    closedat: req.body.closedat,
  };
  const data = await JobApp.create(app)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error occurred creating new job application: ${err}`,
      });
    });
}

export function editJobApp(req, res) {
  JobApp.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then((data) => {
      res.status(200);
      res.send(data[1]);
    })
    .catch((err) => {
      res.status(500).send({
        message: `An error occurred while updating application: ${err}`,
      });
    });
}
