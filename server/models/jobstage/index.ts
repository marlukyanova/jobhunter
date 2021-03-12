import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

export interface JobStageAttributes {
  id: string;
  type: string;
  date: string;
  addinfo: string;
}

export interface JobStageModel
  extends Model<JobStageAttributes>,
    JobStageAttributes {}

export type JobStageStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): JobStageModel;
};

export function JobStageFactory(sequelize: Sequelize) {
  return <JobStageStatic>sequelize.define('jobstage', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addinfo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
}