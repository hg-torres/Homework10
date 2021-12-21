const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Employee extends Model { }

Employee.init({
  first_name: {
    type: DataType.STRING,
    allowNull: false
  },
  last_name:{
    type: DataType.STRING,
    allowNull: false
  },
  role_id:{
    type: DataType.INT,
    allowNull: false
  },
  manager_id:{
    type: DataType.INT,
    allowNull: true
  }
}, { sequelize, modelName: 'employee' })

module.exports = Employee