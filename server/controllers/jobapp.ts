import jobappModel from '../models/jobapp';

const getAllJobs = async (ctx: any) => {
  try {
    // console.log('received get request');
    ctx.body = await jobappModel.getAll();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const getJobApp = async (ctx: any) => {
  try {
    // console.log('received get request for jobapp');
    const id = ctx.request.params.id;
    ctx.body = await jobappModel.getJobApp(id);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const createJobApp = async (ctx: any) => {
  try {
    // console.log("new request to create a jobapp");
    const job = ctx.request.body;
    // console.log(job);
    const newJob = await jobappModel.createJobApp(job);
    // console.log(newJob);
    ctx.status = 201;
    ctx.body = newJob;
  } catch (err) {
    ctx.status = 500;
  }
};

const editJobApp = async (ctx: any) => {
  try {
    // console.log('request to update a jobapp');
    const job = ctx.request.body;
    // console.log(job);
    const id = ctx.request.params.id;
    const updated = await jobappModel.editJobApp(id, job);
    ctx.status = 201;
    ctx.body = updated;
  } catch (err) {
    ctx.status = 500;
  }
};

const jobappController = {
  getAllJobs,
  getJobApp,
  createJobApp,
  editJobApp,
};

export default jobappController;
