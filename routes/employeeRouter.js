const express = require('express');
const employeeController = require('../controllers/employeeController');
const router = express.Router();

// Employee Routes
// Create a new employee
router.post('/employees', employeeController.createEmployee);

// Get all employees
router.get('/employees', employeeController.getEmployees);

// Get a specific employee by ID
router.get('/employees/:eid', employeeController.getEmployeeById);

// Update employee details by ID
router.put('/employees/:eid', employeeController.updateEmployee);

// Delete an employee by ID (use query parameter)
router.delete('/employees', employeeController.deleteEmployee);

module.exports = router;
