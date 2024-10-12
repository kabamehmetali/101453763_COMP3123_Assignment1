const Employee = require('../models/employeeModel');


exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json({ message: 'Employee created successfully', employee_id: newEmployee._id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating employee', error });
    }
};


exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        const employeeList = employees.map(employee => ({
            employee_id: employee._id,
            first_name: employee.first_name,
            last_name: employee.last_name,
            email: employee.email,
            position: employee.position,
            salary: employee.salary,
            date_of_joining: employee.date_of_joining,
            department: employee.department
        }));
        res.status(200).json(employeeList);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
};


exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.eid);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });

        const employeeData = {
            employee_id: employee._id,
            first_name: employee.first_name,
            last_name: employee.last_name,
            email: employee.email,
            position: employee.position,
            salary: employee.salary,
            date_of_joining: employee.date_of_joining,
            department: employee.department
        };

        res.status(200).json(employeeData);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employee', error });
    }
};

// Update an employee by ID
exports.updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });

        res.status(200).json({ message: 'Employee details updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating employee', error });
    }
};


exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.query.eid);
        if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });

        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting employee', error });
    }
};
