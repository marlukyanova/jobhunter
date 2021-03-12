'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const jobapp = sequelize.define('jobapp', {
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
  jobapp.associate = (model) => {
    jobapp.hasMany(model.jobstage);
  };
  return jobapp;
};
