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
    ctx.body = await dashboard.jetJobAppByState();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
  }
}