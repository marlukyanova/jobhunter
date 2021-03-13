import { Request, Response } from "express";

const db = require('../models');
const JobApp = db.jobapp;
const JobStage = db.jobstage;
const { sequelize } = require('../models');

exports.getJobAppsbyStage = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = `
                SELECT 'Application' AS stage, COUNT(*) AS number
                FROM jobapps
                UNION
                SELECT type, COUNT(*)
                FROM jobstages
                GROUP BY type
                ORDER BY number DESC;
                `;
    const queryRes = await sequelize.query(query, { raw: true });
    res.status(200);
    const result = queryRes[0].map((row: any) => {
      return {
        description: row.stage,
        number: parseInt(row.number)
      };
    })
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

exports.getJobAppsByState = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = `
                SELECT state, COUNT(*)
                FROM jobapps
                GROUP BY state
                ORDER BY COUNT(*) DESC;
                `;
    const queryRes = await sequelize.query(query, { raw: true });
    const result = queryRes[0].map((row: any) => {
      return {
        description: row.state,
        number: parseInt(row.count)
      };
    })
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

exports.getTimeStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = `
                SELECT ROUND(AVG(c.diff)) AS AVG, MAX(c.diff) AS MAX, MIN(c.diff) AS MIN
                FROM
                (SELECT TO_DATE(closedat,'YYYY-MM-DD') - TO_DATE(appliedat, 'YYYY-MM-DD') AS diff
                FROM jobapps
                WHERE state = 'Closed'
                ORDER BY diff) AS c;
                `;
    const queryRes = await sequelize.query(query);
    type ResultObject = {};
    const result: ResultObject[] = [];
    result.push({ description: 'Minimum', number: queryRes[0][0].min || 0 });
    result.push({ description: 'Maximum', number: queryRes[0][0].max || 0 });
    result.push({ description: 'Average', number: queryRes[0][0].avg || 0 });
    res.status(200);
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};

exports.getStagesStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const query = `
                SELECT ROUND(AVG(s.count)) AS AVG, MAX(s.count) AS MAX, MIN(s.count) AS MIN
                FROM
                (SELECT COUNT(*) AS count
                FROM jobstages) AS s;
                `;
    const queryRes = await sequelize.query(query);
    console.log(queryRes); 
    type ResultObject = {};
    const result: ResultObject[] = [];
    result.push({ description: 'Minimum', number: queryRes[0][0].min });
    result.push({ description: 'Maximum', number: queryRes[0][0].max });
    result.push({ description: 'Average', number: queryRes[0][0].avg });
    res.status(200);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
  }
};
