import client from './index';

const getAll = async (id) => {
  // console.log('running query');
  const queryRes = await client.query(
    'select * from jobstage where jobappid = $1',
    [id],
  );
  // console.log(res.rows);
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

const getStage = async (stageid) => {
  // console.log('running a query for stageid', stageid);
  const queryRes = await client.query('select * from jobstage where id = $1', [
    stageid,
  ]);
  // console.log(queryRes.rows);
  const res = {
    id: queryRes.rows[0].id,
    createdat: new Date(queryRes.rows[0].createdat),
    type: queryRes.rows[0].type,
    date: new Date(queryRes.rows[0].date),
    addinfo: queryRes.rows[0].addinfo,
  };
  return res;
};

const createStage = async (id, stage) => {
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
  // console.log('running a request with values', values);
  const res = await client.query(query, values);
  // console.log(res.rows[0]);
  //TODO: return jobapp and stage
  return res.rows[0];
};

const editStage = async (stageid, stage) => {
  // console.log('running query', stageid, stage);
  //TODO: check transactions in postgres
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
  // console.log(res.rows[0]);
  //TODO: decide what to return, ideally return updated jobapp and updated stage
  return res.rows[0];
};

const jobstageModel = {
  getAll,
  getStage,
  createStage,
  editStage,
};
