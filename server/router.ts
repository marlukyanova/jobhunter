import * as Router from 'koa-router';

import jobappController from './controllers/jobapp';
import jobstageController from './controllers/jobstage';
import dashboardController from './controllers/dashboard';

const router: Router = new Router();

router.get('/jobapp', jobappController.getAllJobs);
router.get('/jobapp/:id', jobappController.getJobApp);
router.post('/jobapp', jobappController.createJobApp);
router.put('/jobapp/:id', jobappController.editJobApp);

router.get('/jobapp/:id/stage', jobstageController.getAllStages);
router.get('/jobapp/:id/stage/:stageid', jobstageController.getStage);
router.post('/jobapp/:id/stage', jobstageController.createStage);
router.put('/jobapp/:id/stage/:stageid', jobstageController.editStage);

router.get('/dashboard/byStages', dashboardController.getJobAppsbyStage);
router.get('/dashboard/byStates', dashboardController.getJobAppsByState);
router.get('/dashboard/times', dashboardController.getTimeStats);
router.get('/dashboard/stages', dashboardController.getStagesStats);

export default router;
