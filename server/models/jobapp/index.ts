import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface JobAppAttributes {
  position: string;
  company: string;
  description: string;
  state: string;
  stage: string;
  source: string;
  addinfo: string;
  closedreason: string;
  createdat: string;
  appliedat: string;
  closedat: string;
}

export interface JobAppModel
  extends Model<JobAppAttributes>,
    JobAppAttributes {}

export type JobAppStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): JobAppModel;
};

export function JobAppFactory(sequelize: Sequelize) {
  return <JobAppStatic>sequelize.define('jobapp', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addinfo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    closedreason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appliedat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    closedat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
}
