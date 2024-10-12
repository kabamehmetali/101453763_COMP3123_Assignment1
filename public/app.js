// Helper to show alerts
function showAlert(elementId, type, message) {
    const element = document.getElementById(elementId);
    element.classList.remove('d-none');
    element.classList.remove('alert-success', 'alert-danger');
    element.classList.add('alert-' + type);
    element.innerText = message;
}

// Handle Signup
document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/v1/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    });

    const result = await response.json();
    const message = `Status: ${response.status}, Message: ${result.message}`;
    showAlert('signup-result', response.ok ? 'success' : 'danger', message);
});

// Handle Login
document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    const message = `Status: ${response.status}, Message: ${result.message}`;
    showAlert('login-result', response.ok ? 'success' : 'danger', message);
});

// Handle Employee Registration
document.getElementById('employee-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('emp-email').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;
    const department = document.getElementById('department').value;

    const response = await fetch('/api/v1/emp/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name, last_name, email, position, salary, department })
    });

    const result = await response.json();
    const message = `Status: ${response.status}, Message: ${result.message}`;
    showAlert('employee-result', response.ok ? 'success' : 'danger', message);
});

// Handle Get All Employees
document.getElementById('get-all-employees').addEventListener('click', async function() {
    const response = await fetch('/api/v1/emp/employees', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    const allEmployeesElement = document.getElementById('all-employees-result');

    if (response.ok) {
        allEmployeesElement.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
    } else {
        showAlert('all-employees-result', 'danger', `Error loading employees. Status: ${response.status}`);
    }
});

// Handle Get Employee by ID
document.getElementById('get-employee-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const employeeId = document.getElementById('get-employee-id').value;

    const response = await fetch(`/api/v1/emp/employees/${employeeId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    const message = response.ok
        ? `Employee: ${result.first_name} ${result.last_name}, Position: ${result.position}, Salary: ${result.salary}`
        : `Status: ${response.status}, Message: ${result.message}`;
    showAlert('get-employee-result', response.ok ? 'success' : 'danger', message);
});

// Handle Fetch Employee by ID before update
document.getElementById('get-update-employee-id-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const employeeId = document.getElementById('update-employee-id').value;

    const response = await fetch(`/api/v1/emp/employees/${employeeId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    
    if (response.ok) {
        // Populate form fields with the current employee data
        document.getElementById('update-first-name').value = result.first_name;
        document.getElementById('update-last-name').value = result.last_name;
        document.getElementById('update-email').value = result.email;
        document.getElementById('update-position').value = result.position;
        document.getElementById('update-salary').value = result.salary;
        document.getElementById('update-department').value = result.department;

        // Show the update form
        document.getElementById('update-employee-form').classList.remove('d-none');
        showAlert('update-employee-result', 'success', 'Employee data loaded successfully. Now you can update.');
    } else {
        showAlert('update-employee-result', 'danger', `Error: ${result.message}`);
    }
});

// Handle Update Employee by ID
document.getElementById('update-employee-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const employeeId = document.getElementById('update-employee-id').value;
    const first_name = document.getElementById('update-first-name').value;
    const last_name = document.getElementById('update-last-name').value;
    const email = document.getElementById('update-email').value;
    const position = document.getElementById('update-position').value;
    const salary = document.getElementById('update-salary').value;
    const department = document.getElementById('update-department').value;

    const data = {
        first_name,
        last_name,
        email,
        position,
        salary,
        department
    };

    const response = await fetch(`/api/v1/emp/employees/${employeeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    const message = `Status: ${response.status}, Message: ${result.message}`;
    showAlert('update-employee-result', response.ok ? 'success' : 'danger', message);
});

// Handle Delete Employee by ID
document.getElementById('delete-employee-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const employeeId = document.getElementById('delete-employee-id').value;

    const response = await fetch(`/api/v1/emp/employees?eid=${employeeId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    const message = `Status: ${response.status}, Message: ${result.message || 'Employee deleted successfully'}`;
    showAlert('delete-employee-result', response.ok ? 'success' : 'danger', message);
});
