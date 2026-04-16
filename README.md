# 🏨 Hotel Management System (React + Redux Toolkit)

## 📌 Project Overview

This project is a **Hotel Management System** built using modern web technologies like **React**, **Redux Toolkit**, **JSON Server**, and **Axios**.
It allows users to manage hotel rooms, bookings, and authentication with full CRUD functionality.

---

## 🚀 Features

### 🔐 Authentication

* User name : admin
* Password : admin123

### 🏨 Room Management

* ➕ Add Room
* 📋 View Rooms

### 📖 Booking Management

* 🛏️ Book Room
* 📃 View Bookings
* ✏️ Update Booking
* ❌ Cancel Booking

### 🔍 Search & Sort

* Search rooms by type,name
* Sort rooms (price)
* Filter rooms (type,availability)

---

## 🛠️ Tech Stack

* ⚛️ React.js
* 🧠 React Router Dom
* 🧠 Redux Toolkit
* 🌐 Axios
* 🗄️ JSON Server (Fake API)
* 🎨 Bootstrap

---

## 📂 Project Structure

```
PR-PRACTICAL-EXAM-REACT/
│
├── node_modules/
├── public/
│
├── src/
│   ├── api/
│   │   └── apiInstance.js
│   │
│   ├── app/
│   │   └── store.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── AddRoom.jsx
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── ReservationForm.jsx
│   │   ├── ReservationList.jsx
│   │   └── RoomList.jsx
│   │
│   ├── features/
│   │   ├── reservation/
│   │   │   └── reservationSlice.js
│   │   │
│   │   └── room/
│   │       └── roomSlice.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── db.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Pooja23494/PR-Practical-Exam-React.git
cd PR-Practical-Exam-React
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

### 4️⃣ Run React App

```bash
npm run dev
```

---

## 📷 Screenshots

* Login Page
![alt text](<Screenshot 2026-04-16 171550.png>)

* Add Room
![alt text](<Screenshot 2026-04-16 171704.png>)

* Room List
![alt text](<Screenshot 2026-04-16 171649.png>)

* Book Room
![alt text](<Screenshot 2026-04-16 171716.png>)

* Reservations
![alt text](<Screenshot 2026-04-16 171729.png>)

## 📌 Future Improvements

* Payment Integration 💳
* Admin Dashboard 📊
* Real-time booking updates 🔄
* Email Notifications 📧

---

## 👩‍💻 Author

**Pooja Patel**

---

## ⭐ Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.
