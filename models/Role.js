const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Role extends Model { }

Role.init({
  title: {
    type: DataType.STRING,
    allowNull: false
  },
  salary: {
    type: DataType.FLOAT,
    allowNull: false
  },
  department_id: {
    type: DataType.INT,
    allowNull: false
  }
}, { sequelize, modelName: 'role' })

module.exports = Role