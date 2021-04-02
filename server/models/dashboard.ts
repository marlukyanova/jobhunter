import client from './index';

const getJobAppsByStages = async () => {
  const query = `
                SELECT 'Application' AS stage, COUNT(*) AS number 
                FROM jobapp
                UNION 
                SELECT type, COUNT(*)
                FROM jobstage
                GROUP BY type
                ORDER BY number DESC;
                `;
  const queryRes = await client.query(query);
  const res = queryRes.rows.map((row) => {
    return {
      description: row.stage,
      number: parseInt(row.number),
    };
  });
  return res;
};

const getJobAppByState = async () => {
  const query = `
                SELECT state, COUNT(*)
                FROM jobapp
                GROUP BY state
                ORDER BY COUNT(*) DESC;
                `;
  const queryRes = await client.query(query);
  const res = queryRes.rows.map((row) => {
    return {
      description: row.state,
      number: parseInt(row.count),
    };
  });
  return res;
};

const getTimeStats = async () => {
  const query = `
                SELECT ROUND(AVG(c.diff)) AS AVG, MAX(c.diff) AS MAX, MIN(c.diff) AS MIN
                FROM
                (SELECT TO_DATE(closedat,'YYYY-MM-DD') - TO_DATE(appliedat, 'YYYY-MM-DD') AS diff
                FROM jobapp
                WHERE state = 'Closed'
                ORDER BY diff) AS c;
                `;
  const queryRes = await client.query(query);
  // return queryRes.rows[0];
  const res = [];
  res.push({ description: 'Minimum', number: queryRes.rows[0].min });
  res.push({ description: 'Maximum', number: queryRes.rows[0].max });
  res.push({ description: 'Average', number: queryRes.rows[0].avg });
  return res;
};

const getStagesStats = async () => {
  const query = `
                SELECT ROUND(AVG(s.count)) AS AVG, MAX(s.count) AS MAX, MIN(s.count) AS MIN
                FROM 
                (SELECT COUNT(*) AS count
                FROM jobstage
                GROUP BY jobappid) AS s;
                `;
  const queryRes = await client.query(query);
  const res = [];
  res.push({ description: 'Minimum', number: queryRes.rows[0].min });
  res.push({ description: 'Maximum', number: queryRes.rows[0].max });
  res.push({ description: 'Average', number: queryRes.rows[0].avg });
  return res;
};

const dashboardModel = {
  getJobAppsByStages,
  getJobAppByState,
  getTimeStats,
  getStagesStats,
};

export default dashboardModel;
