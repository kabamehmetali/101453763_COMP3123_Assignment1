document.addEventListener('DOMContentLoaded', function() {
    const signupSection = document.getElementById('signup-section');
    const loginSection = document.getElementById('login-section');
    const employeeSection = document.getElementById('employee-section');

    // Toggle between forms
    document.getElementById('show-signup').addEventListener('click', function() {
        showSection(signupSection);
    });
    document.getElementById('show-login').addEventListener('click', function() {
        showSection(loginSection);
    });
    document.getElementById('show-employee').addEventListener('click', function() {
        showSection(employeeSection);
    });

    function showSection(section) {
        signupSection.classList.add('d-none');
        loginSection.classList.add('d-none');
        employeeSection.classList.add('d-none');
        section.classList.remove('d-none');
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
        document.getElementById('signup-result').innerText = result.message || 'Signup Error';
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
        document.getElementById('login-result').innerText = result.message || 'Login Error';
    });

    // Handle Employee Registration
    document.getElementById('employee-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const email = document.getElementById('emp-email').value;
        const position = document.getElementById('position').value;
        const salary = document.getElementById('salary').value;

        const response = await fetch('/api/v1/emp/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ first_name, last_name, email, position, salary })
        });

        const result = await response.json();
        document.getElementById('employee-result').innerText = result.message || 'Employee Registration Error';
    });
});
