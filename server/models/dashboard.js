const client = require('./index');

exports.getJobAppsByStages = async() => {
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
      stage: row.stage,
      number: parseInt(row.number)
    };
  });
  return res;
};