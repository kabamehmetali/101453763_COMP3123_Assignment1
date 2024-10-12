const express = require('express');
const employeeController = require('../controllers/employeeController');
const router = express.Router();


router.post('/employees', employeeController.createEmployee);

router.get('/employees', employeeController.getEmployees);

router.get('/employees/:eid', employeeController.getEmployeeById);

router.put('/employees/:eid', employeeController.updateEmployee);

router.delete('/employees', employeeController.deleteEmployee);

module.exports = router;
