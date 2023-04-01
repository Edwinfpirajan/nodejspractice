const taskQueryPost = `
 INSERT INTO task (tittle, task) VALUES ($1, $2)
`

const taskQueryGet =`
    SELECT * FROM task
`

module.exports = {
    taskQueryPost,
    taskQueryGet
}