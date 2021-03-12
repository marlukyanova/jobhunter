'use strict';

import { JobStageInterface } from "../interfaces/interfaces";
import { Request, Response } from "express";

import { db } from '../models';
const JobStage = db.JobStage;

exports.getAllStages = (req:Request, res:Response):void => {
  JobStage.findAll()
    .then((data: any) => {
      res.status(200);
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: `An error occurred while retrieving stages: ${err}`,
      });
    });
}

exports.getStage = (req:Request, res:Response):void => {
  JobStage.findByPk(req.params.id)
    .then((data: any) => {
      res.status(200);
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: `An error occurred while retrieving stage: ${err}`,
      });
    });
}

exports.createStage = async (req:Request, res:Response):Promise<void> => {
  const stage:JobStageInterface = {
    type: req.body.type,
    date: req.body.date,
    addinfo: req.body.addinfo,
    jobappId: req.params.id,
  };
  
  const data = await JobStage.create(stage)
    .then((data: any) => {
      res.status(200);
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: `Error occurred creating new job stage: ${err}`,
      });
    });
}

exports.editStage = (req:Request, res:Response):void => {
  JobStage.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  })
    .then((data: any) => {
      res.status(200);
      res.send(data[1]);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: `An error occurred while updating stage: ${err}`,
      });
    });
}
