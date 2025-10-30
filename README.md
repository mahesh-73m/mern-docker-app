# 🚀 Dockerized MERN Application

A full-stack **MERN (MongoDB, Express, React, Node.js)** application fully containerized using **Docker** and orchestrated with **Docker Compose**.

This project demonstrates a modern web app setup with isolated frontend and backend environments that communicate seamlessly inside Docker containers.

---

## 🧩 Tech Stack

### Frontend (Client)
- React (Vite)
- Axios
- React Router DOM
- ESLint
- Dockerized as `client` service

### Backend (Server)
- Node.js + Express
- MongoDB (via Docker)
- Mongoose
- dotenv for environment configuration
- Dockerized as `server` service

---

## 📂 Folder Structure
docker-mern-app/
├── client/ # React + Vite frontend
│ ├── src/
│ ├── Dockerfile
│ ├── package.json
│ └── ...
├── server/ # Express backend
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── Dockerfile
│ └── package.json
├── .env # Global environment config
├── docker-compose.yml
└── README.md

🐳 Run with Docker Compose

To build and start all services:

docker-compose up --build


Client → http://localhost:5173

Server → http://localhost:5000

MongoDB → running inside container mongo on port 27017

To stop containers:

docker-compose down


✨ Author

Mahesh
💻 MERN Developer | 🐳 DevOps Enthusiast
📧 mahesh.cse.73@gmail.com
