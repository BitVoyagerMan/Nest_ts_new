// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from 'database/connection';
import { NextApiRequest, NextApiResponse } from 'next';

async function getAll(tableName) {
  const query = `select * from ${tableName}`;
  const results = await connection.query(query);
  return results[0];
}

export default async function getColumnFields(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('getAll api doing..');
  const data = await getAll(req.query.tableName);
  res.status(200).json({ all: data });
}
