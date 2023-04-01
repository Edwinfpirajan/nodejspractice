const db = require('../common/connection')
const { getAllEmployees } = require('../queries/employeeQuery')


const getEmployee = (req, res) => {
    db.query(getAllEmployees, (err, result) => {
      if (err) {
        res.status(400).json(err)
      }
      res.status(200).json(result.rows)
    })
  }
  
  module.exports = {
    getEmployee
  };

module.exports = {
    getEmployee,
}

// left join horaries h on h.id_sch = employes.schedule_id