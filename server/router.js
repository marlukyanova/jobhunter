const Router = require('koa-router');

const jobapp = require('./controllers/jobapp');
const jobstage = require('./controllers/jobstage');
const dashboard = require('./controllers/dashboard');

const router = new Router();

router.get('/jobapp', jobapp.getAllJobs);
router.get('/jobapp/:id', jobapp.getJobApp);
router.post('/jobapp', jobapp.createJobApp);
router.put('/jobapp/:id', jobapp.editJobApp);

router.get('/jobapp/:id/stage', jobstage.getAllStages);
router.get('/jobapp/:id/stage/:stageid', jobstage.getStage);
router.post('/jobapp/:id/stage', jobstage.createStage);
router.put('/jobapp/:id/stage/:stageid', jobstage.editStage);

router.get('/dashboard/byStages', dashboard.getJobAppsbyStage);

module.exports = router;
