'use strict';

import { db } from '../models';
const JobStage = db.JobStage;

export function getAllStages(req, res) {
  JobStage.findAll()
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `An error occurred while retrieving stages: ${err}`,
      });
    });
}

export function getStage(req, res) {
  JobStage.findByPk(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `An error occurred while retrieving stage: ${err}`,
      });
    });
}

export async function createStage(req, res) {
  const stage = {
    createdat: req.body.createdat,
    type: req.body.type,
    date: req.body.date,
    addinfo: req.body.addinfo,
    jobappId: req.params.id,
  };
  const data = await JobStage.create(stage)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error occurred creating new job stage: ${err}`,
      });
    });
}

export function editStage(req, res) {
  JobStage.update(req.body, {
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
        message: `An error occurred while updating stage: ${err}`,
      });
    });
}
