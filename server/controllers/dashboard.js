'use strict';

const db = require('../models');
const JobApp = db.jobapp;
const JobStage = db.jobstage;
const { sequelize } = require('../models');

exports.getJobAppsbyStage = async (req, res) => {
  try {
    const query = `
                SELECT 'Application' AS stage, COUNT(*) AS number
                FROM jobapp
                UNION
                SELECT type, COUNT(*)
                FROM jobstage
                GROUP BY type
                ORDER BY number DESC;
                `;
    const queryRes = await sequelize.query(query, { raw: true });
    res.status(200);
    res.send(queryRes[0]);
  } catch (err) {
    console.error(err);
  }
};

exports.getJobAppsByState = async (req, res) => {
  try {
    const query = `
                SELECT state, COUNT(*)
                FROM jobapp
                GROUP BY state
                ORDER BY COUNT(*) DESC;
                `;
    const queryRes = await sequelize.query(query, { raw: true });
    res.status(200);
    res.send(queryRes[0]);
  } catch (err) {
    console.error(err);
  }
};

exports.getTimeStats = async (req, res) => {
  try {
    const query = `
                SELECT ROUND(AVG(c.diff)) AS AVG, MAX(c.diff) AS MAX, MIN(c.diff) AS MIN
                FROM
                (SELECT TO_DATE(closedat,'YYYY-MM-DD') - TO_DATE(appliedat, 'YYYY-MM-DD') AS diff
                FROM jobapp
                WHERE state = 'Closed'
                ORDER BY diff) AS c;
                `;
    const queryRes = await sequelize.query(query);
    const result = [];
    result.push({ description: 'Minimum', number: queryRes[0].min || 0 });
    result.push({ description: 'Maximum', number: queryRes[0].max || 0 });
    result.push({ description: 'Average', number: queryRes[0].avg || 0 });
    res.status(200);
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

exports.getStagesStats = async (req, res) => {
  try {
    const query = `
                SELECT ROUND(AVG(s.count)) AS AVG, MAX(s.count) AS MAX, MIN(s.count) AS MIN
                FROM
                (SELECT COUNT(*) AS count
                FROM jobstage
                GROUP BY jobappid) AS s;
                `;
    const queryRes = await sequelize.query(query);
    const result = [];
    result.push({ description: 'Minimum', number: queryRes[0].min || 0 });
    result.push({ description: 'Maximum', number: queryRes[0].max || 0 });
    result.push({ description: 'Average', number: queryRes[0].avg || 0 });
    res.status(200);
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};
