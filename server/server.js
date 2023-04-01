const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./common/connection')
const router = require('./routes/router')

const app = express()
const port = 8080

db.connect()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor de Node.js con Express en el puerto 8080')
})

app.use('/api', router)
  
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})