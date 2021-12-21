const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Department extends Model {}

Department.init({
  name: {
    type: DataType.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'department'})

module.exports = Department