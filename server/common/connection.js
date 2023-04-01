const { Client } = require('pg')

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'course',
  password: '1234',
  port: 5432, 
})

module.exports = db