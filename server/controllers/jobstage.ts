import jobstageModel from '../models/jobstage';

const getAllStages = async (ctx: any) => {
  try {
    // console.log('request to get all stages for job');
    const jobappid = ctx.request.params.id;
    // console.log(jobappid);
    ctx.body = await jobstageModel.getAll(jobappid);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const getStage = async (ctx: any) => {
  try {
    // console.log('request to get one stage');
    const stageid = ctx.request.params.stageid;
    ctx.body = await jobstageModel.getStage(stageid);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const createStage = async (ctx: any) => {
  try {
    const jobappid = ctx.request.params.id;
    const stage = ctx.request.body;
    // console.log('request to create new jobstageModel for job', jobappid, 'with data', stage);
    const newstage = await jobstageModel.createStage(jobappid, stage);
    ctx.body = newstage;
    ctx.status = 201;
  } catch (err) {
    ctx.status = 500;
  }
};

const editStage = async (ctx: any) => {
  try {
    // console.log('request to edit stage');
    const stage = ctx.request.body;
    const stageid = ctx.request.params.stageid;
    const updated = await jobstageModel.editStage(stageid, stage);
    ctx.status = 201;
    ctx.body = updated;
  } catch (err) {
    ctx.status = 500;
  }
};

const jobStageController = {
  getAllStages,
  getStage,
  createStage,
  editStage,
};

export default jobStageController;
