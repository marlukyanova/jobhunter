const Router = require('koa-router');

const jobapp = require('./controllers/jobapp');
const jobstage = require('./controllers/jobstage');

const router = new Router();

router.get('/jobapp', jobapp.getAllJobs);
router.get('/jobapp/:id', jobapp.getJobApp);
router.post('/jobapp/new', jobapp.createJobApp);
router.put('/jobapp/:id', jobapp.editJobApp);

router.get('/jobapp/:id/stage', jobstage.getAllStages);
router.get('/jobapp/:id/stage/:stageid', jobstage.getStage);
router.post('/jobapp/:id/stage', jobstage.createStage);
router.put('/jobapp/:id/stage/:stageid', jobstage.editStage);

module.exports = router;