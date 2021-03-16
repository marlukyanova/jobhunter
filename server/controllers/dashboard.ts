import dashboardModel from '../models/dashboard';

const getJobAppsbyStage = async (ctx) => {
  try {
    ctx.body = await dashboardModel.getJobAppsByStages();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const getJobAppsByState = async (ctx) => {
  try {
    ctx.body = await dashboardModel.getJobAppByState();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const getTimeStats = async (ctx) => {
  try {
    ctx.body = await dashboardModel.getTimeStats();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const getStagesStats = async (ctx) => {
  try {
    ctx.body = await dashboardModel.getStagesStats();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const dashboardController = {
  getJobAppsbyStage,
  getJobAppsByState,
  getTimeStats,
  getStagesStats,
};

export default dashboardController;
