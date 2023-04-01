const db = require('../common/connection')
const {taskQuery, taskQueryGet, taskQueryPost} = require('../queries/taskQuery')

const createTask = (req, res) => {
  const { tittle, task } = req.body

  db.query(taskQueryPost, [tittle, task], (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message })
      return
    }

    res.status(201).json({ message: 'Tarea creada exitosamente' })
  })
}

const getTask = (req, res) =>{
    db.query(taskQueryGet, (err, result) => {
        if (err) {
          res.status(400).json(err)
        }
        res.status(200).json(result.rows)
      })
}

module.exports = {
  createTask,
    getTask
}