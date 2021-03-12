'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const jobstage = sequelize.define('jobstage', {
    createdate: {
      type: DataTypes.STRING,
      allowNull: false,
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
  jobstage.associate = (model) => {
    jobstage.belongsTo(model.jobapp);
  };
  return jobstage;
};
