import { Sequelize } from 'sequelize';
import { JobAppFactory, JobAppStatic } from './jobapp';
import { JobStageFactory, JobStageStatic } from './jobstage';

export interface DB {
  sequelize: Sequelize;
  JobApp: JobAppStatic;
  JobStage: JobStageStatic;
}

export const sequelize = new Sequelize('JobHunter', 'shaunmartin', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    min: 0,
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});

const JobApp = JobAppFactory(sequelize);
const JobStage = JobStageFactory(sequelize);

JobStage.belongsTo(JobApp);
JobApp.hasMany(JobStage);

export const db: DB = {
  sequelize,
  JobApp,
  JobStage
};
