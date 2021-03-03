const client = require('./index');

exports.getAll = async (id) => {
  // console.log('running query');
  const res = await client.query('select * from jobstage where jobappid = $1', [id]);
  // console.log(res.rows);
  return res.rows;
}

exports.getStage = async (stageid) => {
  const res = await client.query('select * from jobstage where and id = $1', [stageid]);
  return res.rows;
}

exports.createStage = async (id, stage) => {
  const query = `
                WITH src AS (
                  INSERT INTO jobstage(type, date, addinfo, jobappid)
                          VALUES ($1, $2, $3, $4)
                          RETURNING *
                  )
                UPDATE jobapp j
                SET 
                  stage = src.type,
                  state = 'Active'
                FROM src
                WHERE j.id = src.jobappid;
                `
  const values = [stage.type, stage.date, stage.addinfo, id];
  const res = await client.query(query, values);
  //TODO: return jobapp and stage
  return res.rows;
}

exports.editStage = async (stageid, stage) => {
  // console.log('running query', stageid, stage);
  const query = `
                WITH src AS (
                  UPDATE jobstage
                  SET 
                    type = $1, 
                    date = $2,
                    addinfo = $3
                  WHERE id = $4
                  RETURNING *
                  )
                UPDATE jobapp j
                SET 
                  stage = src.type,
                  state = 'Active'
                FROM src
                WHERE j.id = src.jobappid
                RETURNING *;`
  const values = [stage.type, stage.date, stage.addinfo, stageid];
  const res = await client.query(query, values);
  console.log(res.rows);
  //TODO: decide what to return, ideally return updated jobapp and updated stage
  return res.rows;
}