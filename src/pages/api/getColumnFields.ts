// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from 'database/connection';
import { NextApiRequest, NextApiResponse } from 'next';

async function getAllColumns(tableName) {
  const query = `describe ${tableName}`;
  const results = await connection.query(query);
  return results[0].map((result) => {
    return { field: result['Field'], filter: 'agTextColumnFilter' };
  });
}

export default async function getColumnFields(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('getColumnFields api doing..');
  console.log(req.query);
  const data = await getAllColumns(req.query.tableName);
  res.status(200).json({ columns: data });
}
