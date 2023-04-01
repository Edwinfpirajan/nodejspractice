const db = require('../common/connection')
const {taskQuery} = require('../queries/taskQuery')

const createTask = (req, res) => {
  const { tittle, task } = req.body

  db.query(taskQuery, [tittle, task], (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message })
      return
    }

    res.status(201).json({ message: 'Tarea creada exitosamente' })
  })
}

module.exports = {
  createTask,
}