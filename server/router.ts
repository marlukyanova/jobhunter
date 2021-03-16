import * as Router from 'koa-router';

import jobapp from './controllers/jobapp';
import jobstage from './controllers/jobstage';
import dashboardController from './controllers/dashboard';

const router: Router = new Router();

router.get('/jobapp', jobapp.getAllJobs);
router.get('/jobapp/:id', jobapp.getJobApp);
router.post('/jobapp', jobapp.createJobApp);
router.put('/jobapp/:id', jobapp.editJobApp);

router.get('/jobapp/:id/stage', jobstage.getAllStages);
router.get('/jobapp/:id/stage/:stageid', jobstage.getStage);
router.post('/jobapp/:id/stage', jobstage.createStage);
router.put('/jobapp/:id/stage/:stageid', jobstage.editStage);

router.get('/dashboard/byStages', dashboardController.getJobAppsbyStage);
router.get('/dashboard/byStates', dashboardController.getJobAppsByState);
router.get('/dashboard/times', dashboardController.getTimeStats);
router.get('/dashboard/stages', dashboardController.getStagesStats);

export default router;
