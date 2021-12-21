const Department = require('./Department.js')
const Role = require('./Role.js')
const Employee = require('./Employee.js')

Employee.hasOne(Role, { foreignKey: 'uid' })
Employee.belongsTo(Employee, { foreignKey: 'uid' })
Role.belongsTo(Department, { foreignKey: 'uid' })

module.exports = {Department, Role, Employee}

