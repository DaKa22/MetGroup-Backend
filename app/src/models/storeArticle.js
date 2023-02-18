import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const storeArticles = sequelize.define('store_articles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  reference: {
    type: DataTypes.INTEGER,
  },
},
  { timestamps: false }
);
