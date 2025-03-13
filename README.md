# 📝 To-Do App Backend

This is the backend for a **To-Do application** built with **Node.js**, **Express**, and **MongoDB**. It provides a **RESTful API** to manage tasks efficiently.

## 🚀 Features

✅ **Create, Read, Update, and Delete (CRUD) tasks**  
✅ **MongoDB database with Mongoose**  
✅ **RESTful API with Express.js**  
✅ **Environment variable configuration with dotenv**  
✅ **Deployed on Render**

---

## 🌍 Live Deployment

The backend is **deployed on Render** and can be accessed here:  
🔗 **[To-Do Backend API](https://todo-level1-backend.onrender.com)**

---

## 🛠️ Running Locally

### 📥 1. Clone the Repository

```sh
git clone <repository_url>
cd todo-app-backend
```

### 📦 2. Install Dependencies

```sh
npm install
```

### ⚙️ 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 🚀 4. Start the Server

For normal execution:

```sh
npm start
```

For development mode (with auto-reloading):

```sh
npm run dev
```

---

## 📌 Using the Deployed API (Postman Guide)

You can interact with the deployed backend using **Postman** or any REST client.

### 🌟 Base URL

```
https://todo-level1-backend.onrender.com/api/tasks
```

### 📝 API Endpoints

#### ➕ Create a Task

- **Method:** `POST /api/tasks`
- **Body (JSON):**
  ```json
  {
    "title": "Buy groceries",
    "description": "Get milk, eggs, and bread"
  }
  ```
- **Response (JSON):**
  ```json
  {
    "_id": "task_id",
    "title": "Buy groceries",
    "description": "Get milk, eggs, and bread",
    "completed": false
  }
  ```

#### 📜 Get All Tasks

- **Method:** `GET /api/tasks`

#### 📌 Get a Single Task

- **Method:** `GET /api/tasks/:id`

#### ✏️ Update a Task

- **Method:** `PUT /api/tasks/:id`
- **Body (JSON):**
  ```json
  {
    "title": "Buy groceries",
    "description": "Get milk, eggs, bread, and butter"
  }
  ```

#### ❌ Delete a Task

- **Method:** `DELETE /api/tasks/:id`

---

## 🛠️ Technologies Used

- 🟢 **Node.js** - Backend runtime
- 🚀 **Express.js** - API framework
- 🗄️ **MongoDB** - NoSQL database
- 📜 **Mongoose** - ODM for MongoDB
- 🔐 **dotenv** - Environment variable management
- 🛠️ **nodemon** - Development tool for live reloading

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ✨ Contributing

Feel free to open issues or submit pull requests for improvements!

---

### 📢 Need Help?

If you have any questions or need support, feel free to reach out. 🚀
