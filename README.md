# To-Do App Backend

This is the backend for a to-do application built with Node.js, Express, and MongoDB. It provides CRUD operations to manage tasks.

## Features

- Create, Read, Update, and Delete (CRUD) tasks
- RESTful API with Express.js
- MongoDB as the database
- Uses Mongoose for data modeling

## Installation

1. Clone this repository:

   ```sh
   git clone 
   cd todo-app-backend
   Install dependencies:
   ```


npm install
Create a .env file and configure your MongoDB connection:


MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the server:


npm start
Or for development mode with auto-reload:


npm run dev
API Endpoints
Create a Task
POST /api/tasks
Body (JSON):


{
"title": "Buy groceries",
"description": "Get milk, eggs, and bread"
}
Get All Tasks
GET /api/tasks

Get a Single Task
GET /api/tasks/:id

Update a Task
PUT /api/tasks/:id
Body (JSON):


{
"title": "Buy groceries",
"description": "Get milk, eggs, bread, and butter"
}
Delete a Task
DELETE /api/tasks/:id

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
dotenv (for environment variables)
nodemon (for development)
License
This project is licensed under the MIT License.



Let me know if you need any modifications! 🚀
