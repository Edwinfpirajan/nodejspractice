const employeeController = require('../controllers/employeeControler');
const taskController = require('../controllers/taskController');
const express = require('express');
const db = require('../common/connection')

const router = express.Router();

router.get('/employee',employeeController.getEmployee)
router.post('/task', taskController.createTask)

module.exports = router;
