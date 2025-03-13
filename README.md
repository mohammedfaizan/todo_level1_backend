To-Do App Backend

This is the backend for a to-do application built with Node.js, Express, and MongoDB. It provides CRUD operations to manage tasks.

Features

Create, Read, Update, and Delete (CRUD) tasks

RESTful API with Express.js

MongoDB as the database

Uses Mongoose for data modeling

Deployment

The backend is deployed and accessible at:

https://todo-level1-backend.onrender.com

Running Locally

Prerequisites

Node.js installed

MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)

Installation Steps

Clone this repository:

git clone <repository_url>
cd todo-app-backend

Install dependencies:

npm install

Create a .env file in the root directory and configure your MongoDB connection:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the server:

npm start

Or for development mode with auto-reload:

npm run dev

API Endpoints

Create a Task

Endpoint: POST /api/tasks

Body (JSON):

{
"title": "Buy groceries",
"description": "Get milk, eggs, and bread"
}

Get All Tasks

Endpoint: GET /api/tasks

Get a Single Task

Endpoint: GET /api/tasks/:id

Update a Task

Endpoint: PUT /api/tasks/:id

Body (JSON):

{
"title": "Buy groceries",
"description": "Get milk, eggs, bread, and butter"
}

Delete a Task

Endpoint: DELETE /api/tasks/:id

Using the Deployed Version (Postman Guide)

Open Postman.

Set the Base URL to:

https://todo-level1-backend.onrender.com

Use the following endpoints to interact with the API:

Create a Task:

Method: POST

URL: https://todo-level1-backend.onrender.com/api/tasks

Body (JSON):

{
"title": "Buy groceries",
"description": "Get milk, eggs, and bread"
}

Get All Tasks:

Method: GET

URL: https://todo-level1-backend.onrender.com/api/tasks

Get a Single Task:

Method: GET

URL: https://todo-level1-backend.onrender.com/api/tasks/{task_id}

Update a Task:

Method: PUT

URL: https://todo-level1-backend.onrender.com/api/tasks/{task_id}

Body (JSON):

{
"title": "Buy groceries",
"description": "Get milk, eggs, bread, and butter"
}

Delete a Task:

Method: DELETE

URL: https://todo-level1-backend.onrender.com/api/tasks/{task_id}

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

dotenv (for environment variables)

nodemon (for development)

License

This project is licensed under the MIT License.
