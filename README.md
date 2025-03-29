# Authentication and Role-Based Access Control API

## Overview
This project is an Express.js-based API that implements user authentication and role-based access control. It includes functionalities for user registration, login, protected routes, and database connectivity.

## Features
- User authentication using JWT (JSON Web Token)
- Role-based access control (Admin, Manager, User)
- Secure password handling
- Database connectivity using MongoDB
- Middleware for authorization and authentication

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps to Install
1. Clone the repository:
   ```bash
   git clone https://github.com/diwakarshukla941/Role-Based-Authorization
   ```
2. Navigate to the project folder:
   ```bash
   cd Role-Based-Authorization
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add the following environment variables:
   ```env
   PORT=7001
   JWT_SECRET=<your-secret-key>
   CONNECTION_STRING=<your-mongodb-connection-url>
   ```
5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication Routes
- **Register a new user**  
  `POST /api/auth/register`  
  Body:
  ```json
  {
    "username": "exampleUser",
    "password": "password123",
    "role": "user"
  }
  ```
- **Login**  
  `POST /api/auth/login`  
  Body:
  ```json
  {
    "username": "exampleUser",
    "password": "password123"
  }
  ```

### Protected Routes
- **Admin Route** (Only Admin can access)  
  `GET /api/user/admin`  
- **Manager Route** (Admin & Manager can access)  
  `GET /api/user/manager`  
- **User Route** (Admin, Manager & User can access)  
  `GET /api/user/user`

## Middleware
- **authMiddleware.js**: Verifies JWT token in the request header.
- **roleMiddleware.js**: Restricts access based on user roles.

## Database Connection
- **dbConnect.js**: Establishes a connection with MongoDB using Mongoose.

## Running the Project
- Run the following command to start the server:
  ```bash
  npm start
  ```
- The API will be accessible at `http://localhost:7001`

## License
This project is licensed under the MIT License.

