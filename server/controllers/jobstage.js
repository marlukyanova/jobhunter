const jobstage = require('../models/jobstage');

exports.getAllStages = async (ctx) => {
  try {
    // console.log('request to get all stages for job');
    const jobappid = ctx.request.params.id;
    // console.log(jobappid);
    ctx.body = await jobstage.getAll(jobappid);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getStage = async (ctx) => {
  try {
    // console.log('request to get one stage');
    const stageid = ctx.request.params.stageid;
    ctx.body = await jobstage.getStage(stageid);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.createStage = async (ctx) => {
  try {
    const jobappid = ctx.request.params.id;
    const stage = ctx.request.body;
    // console.log('request to create new jobstage for job', jobappid, 'with data', stage);
    const newstage = await jobstage.createStage(jobappid, stage);
    ctx.body = newstage;
    ctx.status = 201;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.editStage = async (ctx) => {
  try {
    // console.log('request to edit stage');
    const stage = ctx.request.body;
    const stageid = ctx.request.params.stageid;
    const updated = await jobstage.editStage(stageid, stage);
    ctx.status = 201;
    ctx.body = updated;
  } catch (err) {
    ctx.status = 500;
  }
};
