import { Sequelize } from 'sequelize';
import config from './config/config';

let sequelize: Sequelize;

if (process.env.NODE_ENV === 'development') {
  sequelize = new Sequelize(config.development);
}
const connection = sequelize;

export default connection;
