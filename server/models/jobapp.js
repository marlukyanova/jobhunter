const client = require('./index');

exports.getAll = async () => {
  const queryRes = await client.query('select * from jobapp');
  const res = queryRes.rows.map((row) => {
    return {
      id: row.id,
      createdat: new Date(row.createdat),
      position: row.position,
      company: row.company,
      appliedat: new Date(row.appliedat),
      state: row.state,
      stage: row.stage,
    };
  });
  return res;
};

exports.getJobApp = async (id) => {
  const queryRes = await client.query('select * from jobapp where id=$1', [id]);
  const res = {
    id: queryRes.rows[0].id,
    createdat: new Date(queryRes.rows[0].createdat),
    position: queryRes.rows[0].position,
    company: queryRes.rows[0].company,
    appliedat: new Date(queryRes.rows[0].appliedat),
    state: queryRes.rows[0].state,
    stage: queryRes.rows[0].stage,
    description: queryRes.rows[0].description,
    source: queryRes.rows[0].source,
    addinfo: queryRes.rows[0].addinfo,
    closedat: new Date(queryRes.rows[0].closedat),
    closedreason: queryRes.rows[0].closedreason,
  };
  return res;
};

exports.createJobApp = async (job) => {
  const query = `INSERT INTO jobapp(createdat, position, company, appliedat, description, addinfo, state, stage) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                 RETURNING *;`;
  const values = [
    new Date(Date.now()).toISOString(),
    job.position,
    job.company,
    new Date(job.appliedat).toISOString(),
    job.description,
    job.addinfo,
    job.state,
    job.stage,
  ];
  const res = await client.query(query, values);
  return res.rows[0];
};

exports.editJobApp = async (id, job) => {
  const query = `
                UPDATE jobapp
                SET 
                  position = $1,
                  company = $2,
                  description = $3,
                  appliedat = $4,
                  state = $5,
                  stage = $6,
                  source = $7,
                  addinfo = $8,
                  closedat = $9,
                  closedreason = $10
                WHERE id = $11
                RETURNING *;
                `;
  const values = [
    job.position,
    job.company,
    job.description,
    job.appliedat,
    job.state,
    job.stage,
    job.source,
    job.addinfo,
    job.closedat,
    job.closedreason,
    id,
  ];
  const res = await client.query(query, values);
  return res.rows;
};
