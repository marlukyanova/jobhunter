import dashboard from '../models/dashboard';

const getJobAppsbyStage = async (ctx) => {
  try {
    ctx.body = await dashboard.getJobAppsByStages();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const getJobAppsByState = async (ctx) => {
  try {
    ctx.body = await dashboard.getJobAppByState();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const getTimeStats = async (ctx) => {
  try{
    ctx.body = await dashboard.getTimeStats();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

const getStagesStats = async (ctx) => {
  try {
    ctx.body = await dashboard.getStagesStats();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

export {
  getJobAppsbyStage,
  getJobAppsByState,
  getTimeStats,
  getStagesStats,
}