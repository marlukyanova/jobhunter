const router = require('express').Router();

const jobapp = require('./controllers/jobapp');
const jobstage = require('./controllers/jobstage');
const dashboard = require('./controllers/dashboard');

router.get('/jobapp', jobapp.getAllJobs);
router.get('/jobapp/:id', jobapp.getJobApp);
router.post('/jobapp', jobapp.createJobApp);
router.put('/jobapp/:id', jobapp.editJobApp);

router.get('/jobapp/:id/stage', jobstage.getAllStages);
router.get('/jobapp/:id/stage/:stageid', jobstage.getStage);
router.post('/jobapp/:id/stage', jobstage.createStage);
router.put('/jobapp/:id/stage/:stageid', jobstage.editStage);

router.get('/dashboard/byStages', dashboard.getJobAppsbyStage);
router.get('/dashboard/byStates', dashboard.getJobAppsByState);
router.get('/dashboard/times', dashboard.getTimeStats);
router.get('/dashboard/stages', dashboard.getStagesStats);

module.exports = router;
