const client = require('./index');

exports.getAll = async (id) => {
  const queryRes = await client.query(
    'select * from jobstage where jobappid = $1',
    [id]
  );
  const res = queryRes.rows.map((row) => {
    return {
      id: row.id,
      createdat: new Date(row.createdat),
      type: row.type,
      date: new Date(row.date),
    };
  });
  return res;
};

exports.getStage = async (stageid) => {
  const queryRes = await client.query('select * from jobstage where id = $1', [
    stageid,
  ]);
  const res = {
    id: queryRes.rows[0].id,
    createdat: new Date(queryRes.rows[0].createdat),
    type: queryRes.rows[0].type,
    date: new Date(queryRes.rows[0].date),
    addinfo: queryRes.rows[0].addinfo,
  };
  return res;
};

exports.createStage = async (id, stage) => {
  //TODO: check transactions in postgres
  const query = `
                WITH src AS (
                  INSERT INTO jobstage(createdat, type, date, addinfo, jobappid)
                          VALUES ($1, $2, $3, $4, $5)
                          RETURNING *
                  )
                UPDATE jobapp j
                SET 
                  stage = src.type,
                  state = 'Active'
                FROM src
                WHERE j.id = src.jobappid
                RETURNING *;
                `;
  const values = [
    new Date(Date.now()).toISOString(),
    stage.stage,
    stage.date,
    stage.addinfo,
    parseInt(id),
  ];
  const res = await client.query(query, values);
  return res.rows[0];
};

exports.editStage = async (stageid, stage) => {
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
                RETURNING *;`;
  const values = [stage.stage, stage.date, stage.addinfo, parseInt(stageid)];
  const res = await client.query(query, values);
  return res.rows[0];
};
