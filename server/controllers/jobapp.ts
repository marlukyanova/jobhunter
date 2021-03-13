'use strict';

import { JobAppAttributes } from "../models/jobapp";
import { Request, Response } from "express";

import { db } from '../models';
const JobApp = db.JobApp;

exports.getAllJobs = (req:Request, res:Response):void => {
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

exports.getJobApp = (req:Request, res:Response):void => {
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

exports.createJobApp = async (req:Request, res:Response):Promise<void> => {
  const app: JobAppAttributes = {
    id:'',
    position: req.body.position,
    company: req.body.company,
    description: req.body.description,
    state: req.body.state,
    stage: req.body.stage,
    source: req.body.source,
    addinfo: req.body.addinfo,
    closedreason: req.body.closedreason,
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

exports.editJobApp = (req:Request, res:Response):void => {
  JobApp.update(req.body, {
    where: { id: req.params.id },
    returning: true,
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
