
# 101453763_COMP3123_Assignment1

**Author**: Mehmet Ali Kaba  
**Student Number**: 101453763

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Validation](#validation)
- [Testing the API](#testing-the-api)
- [Error Handling](#error-handling)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)

---

## Project Overview

This project is for COMP3123 - Full Stack Development II and implements a RESTful API using Node.js and MongoDB. The API allows for the creation, reading, updating, and deletion (CRUD) of users and employees, with proper validation and error handling.

The project includes separate routes for managing user authentication (sign-up, login) and employee management. It also integrates request validation using `express-validator`.

## Features

- **User Management**: Create a user, login, and validate credentials.
- **Employee Management**: Perform CRUD operations on employees (create, read, update, delete).
- **Validation**: Ensures that incoming requests are validated before being processed.
- **Modularized Code**: Routes and controllers are separated for maintainability.
- **Error Handling**: Handles errors gracefully, with meaningful error messages returned to the client.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework used to handle routing and middleware.
- **MongoDB**: NoSQL database for storing users and employee data.
- **Mongoose**: MongoDB object modeling tool for schema definitions.
- **express-validator**: Library for validating incoming requests.
- **bcrypt**: Library for hashing user passwords.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/mehmetalikaba/101453763_COMP3123_Assignment1.git
   ```

2. Navigate into the project directory:

   ```bash
   cd 101453763_COMP3123_Assignment1
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up the `.env` file with your MongoDB connection string:

   Create a `.env` file in the root directory with the following content:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:3000`.

## API Endpoints

### User Endpoints

- **POST** `/api/v1/user/signup` - Create a new user.
- **POST** `/api/v1/user/login` - Login a user.

### Employee Endpoints

- **POST** `/api/v1/emp/employees` - Create a new employee.
- **GET** `/api/v1/emp/employees` - Get all employees.
- **GET** `/api/v1/emp/employees/:eid` - Get employee by ID.
- **PUT** `/api/v1/emp/employees/:eid` - Update employee by ID.
- **DELETE** `/api/v1/emp/employees?eid=xxx` - Delete employee by ID.

## Validation

Incoming requests are validated using the `express-validator` library. All data sent back and forth must be in JSON format, and validation errors return a structured response indicating what fields failed validation.

For example:

```json
{
  "status": false,
  "message": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    }
  ]
}
```

## Testing the API

You can test the API endpoints using Postman. Import the collection into Postman, and make sure to update the URLs to point to your local server running on `http://localhost:3000`.

1. **Create User**: `POST /api/v1/user/signup`
2. **Login User**: `POST /api/v1/user/login`
3. **Create Employee**: `POST /api/v1/emp/employees`
4. **Get All Employees**: `GET /api/v1/emp/employees`
5. **Get Employee by ID**: `GET /api/v1/emp/employees/:eid`
6. **Update Employee**: `PUT /api/v1/emp/employees/:eid`
7. **Delete Employee**: `DELETE /api/v1/emp/employees?eid=<employee_id>`

### Screenshots
- Ensure to capture screenshots of the API tests in Postman and attach them to your project for submission.

## Error Handling

All errors, including validation errors and server errors, are handled gracefully. The API returns a meaningful JSON response for each error, including:

- **400 Bad Request** for validation issues.
- **500 Internal Server Error** for unhandled exceptions.

Example error response:

```json
{
  "status": false,
  "message": "Invalid Username and password"
}
```

## Future Enhancements

- **JWT Authentication**: Implement JWT for securing the API endpoints.
- **Additional Fields**: Extend employee schema to include more information (e.g., performance reviews).
- **Testing**: Implement automated tests for all endpoints.

---

