const jobapp = require('../models/jobapp');

exports.getAllJobs = async (ctx) => {
  try {
    ctx.body = await jobapp.getAll();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getJobApp = async (ctx) => {
  try {
    const id = ctx.request.params.id;
    ctx.body = await jobapp.getJobApp(id);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.createJobApp = async (ctx) => {
  try {
    const job = ctx.request.body;
    const newJob = await jobapp.createJobApp(job);
    ctx.status = 201;
    ctx.body = newJob;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.editJobApp = async (ctx) => {
  try {
    const job = ctx.request.body;
    const id = ctx.request.params.id;
    const updated = await jobapp.editJobApp(id, job);
    ctx.status = 201;
    ctx.body = updated;
  } catch (err) {
    ctx.status = 500;
  }
};
