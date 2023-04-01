const taskQuery = `
 INSERT INTO task (tittle, task) VALUES ($1, $2)
`

module.exports = {
    taskQuery
}