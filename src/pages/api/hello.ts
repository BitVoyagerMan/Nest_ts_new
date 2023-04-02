// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connection from 'database/connection';
import { NextApiRequest, NextApiResponse } from 'next';

async function getAllTables() {
  const query = `SELECT table_name FROM information_schema.tables WHERE table_schema = "${connection.config.database}"`;
  const [results] = await connection.query(query);
  return results.map((result) => result['TABLE_NAME']);
}

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  console.log('hello api doing..');
  const data = await getAllTables();
  res.status(200).json({ name: data });
}
