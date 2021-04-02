const dashboard = require('../models/dashboard');

exports.getJobAppsbyStage = async (ctx) => {
  try {
    ctx.body = await dashboard.getJobAppsByStages();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getJobAppsByState = async (ctx) => {
  try {
    ctx.body = await dashboard.getJobAppByState();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getTimeStats = async (ctx) => {
  try {
    ctx.body = await dashboard.getTimeStats();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};

exports.getStagesStats = async (ctx) => {
  try {
    ctx.body = await dashboard.getStagesStats();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
};
