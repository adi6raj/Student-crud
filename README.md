📚 Student Management CRUD Application



✨ About the Project
A simple Student Management System that demonstrates basic CRUD (Create, Read, Update, Delete) operations using:

MongoDB for database

Express.js for backend server

HTML/CSS/JavaScript for frontend UI

This project allows users to add, view, update, and delete student records easily through a clean and responsive web interface.

🎯 Features
🔥 Create new student profiles

🧾 View all students

✏️ Edit student details

❌ Delete student records

🔗 RESTful API integration

🎨 Clean and responsive user interface

⚙️ Tech Stack

Frontend	Backend	Database
HTML5, CSS3, JavaScript	Node.js, Express.js	MongoDB, Mongoose

📂 Folder Structure
pgsql
Copy
Edit
student-crud/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── controllers/
│   └── studentController.js
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── config/
│   └── db.js
├── server.js
├── package.json

🚀 Getting Started
1. Clone the Repository:
![image](https://github.com/user-attachments/assets/06a10840-ef75-4f0a-803e-187a71f0c9a3)


2. Install Node.js Dependencies:

bash
Copy
Edit
npm install
Start MongoDB locally:

bash
Copy
Edit
mongod
Run the Server:

bash
Copy
Edit
npm run dev
or

bash
Copy
Edit
npm start
Open your Browser:

arduino
Copy
Edit
http://localhost:5000
📬 API Endpoints

Method	Route	Action
GET	/api/students	Get all students
POST	/api/students	Add a new student
GET	/api/students/:id	Get a student by ID
PUT	/api/students/:id	Update a student's info
DELETE	/api/students/:id	Remove a student
