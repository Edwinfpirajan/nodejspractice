const employeeController = require('../controller/employeeControler');
const express = require('express');
const db = require('../common/connection')

const router = express.Router();

router.get('/employee', (req, res) => {
    employeeController.getEmployee(req, res, db)
})

module.exports = router;
