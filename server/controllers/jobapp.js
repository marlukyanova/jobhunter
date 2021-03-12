'use strict';

const db = require('../models');
const JobApp = db.jobapp;

exports.getAllJobs = (req, res) => {
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
};

exports.getJobApp = (req, res) => {
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
};

exports.createJobApp = async (req, res) => {
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
};

exports.editJobApp = (req, res) => {
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
};
