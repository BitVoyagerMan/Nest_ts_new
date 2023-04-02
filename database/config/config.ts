import { Options } from 'sequelize';

const credentials: { [key: string]: Options } = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
  },
};

export default credentials;
