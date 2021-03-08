const dashboard = require('../models/dashboard');

exports.getJobAppsbyStage = async (ctx) => {
  try {
    ctx.body = await dashboard.getJobAppsByStages();
  } catch (err) {
    ctx.status = 500;
  }
};