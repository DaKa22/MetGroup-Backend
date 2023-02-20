import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Article = sequelize.define('articles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio: {
    type: DataTypes.INTEGER,
  },
})