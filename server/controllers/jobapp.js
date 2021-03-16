const jobapp = require('../models/jobapp');

exports.getAllJobs = async (ctx) => {
  try {
    // console.log('received get request');
    ctx.body = await jobapp.getAll();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getJobApp = async (ctx) => {
  try {
    // console.log('received get request for jobapp');
    const id = ctx.request.params.id;
    ctx.body = await jobapp.getJobApp(id);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.createJobApp = async (ctx) => {
  try {
    // console.log("new request to create a jobapp");
    const job = ctx.request.body;
    // console.log(job);
    const newJob = await jobapp.createJobApp(job);
    // console.log(newJob);
    ctx.status = 201;
    ctx.body = newJob;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.editJobApp = async (ctx) => {
  try {
    // console.log('request to update a jobapp');
    const job = ctx.request.body;
    // console.log(job);
    const id = ctx.request.params.id;
    const updated = await jobapp.editJobApp(id, job);
    ctx.status = 201;
    ctx.body = updated;
  } catch (err) {
    ctx.status = 500;
  }
};
