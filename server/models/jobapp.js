const client = require('./index');

exports.getAll = async () => {
  // console.log('getting all jobapps from db');
  const res = await client.query('select * from jobapp');
  // console.log(res.rows);
  return res.rows;
}

exports.getJobApp = async (id) => {
  const res = await client.query('select * from jobapp where id=$1', [id]);
  // console.log(res.rows);
  return res.rows;
}

exports.createJobApp = async (job) => {
  const query = `INSERT INTO jobapp(position, company, description, appliedat, source, addinfo, closedat, closedreason) 
                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                 RETURNING *;`
  const values = [job.position, job.company, job.description, job.appliedat, job.source, job.addinfo, job.closedat, job.closedreason];
  console.log('creating new job in db with values', values);
  const res = await client.query(query, values);
  // console.log(res.rows);
  return res.rows;
}

exports.editJobApp = async (id, job) => {
  // console.log('data to update', job);
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
                `
  const values = [job.position, job.company, job.description, job.appliedat, job.state, job.stage, job.source, job.addinfo, job.closedat, job.closedreason, id];
  const res = await client.query(query, values);
  // console.log(res.rows);
  return res.rows;
}