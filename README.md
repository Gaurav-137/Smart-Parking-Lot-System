# 🚗 Smart Parking Lot System

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Status](https://img.shields.io/badge/Status-Completed-success)

---

## 💡 About This Project

This project is part of my journey to master **Low-Level Design (LLD)** and build real-world backend systems.

It simulates a **Smart Parking Lot System** that handles:

* 🚘 Vehicle entry & exit
* 🅿️ Smart parking spot allocation
* 💰 Parking fee calculation
* 📊 Real-time availability

If you're preparing for **system design interviews**, this is a great hands-on reference.

⭐ If you like this project, consider giving it a star!

---

## 🎯 Features

* Automatic spot allocation based on vehicle type
* Entry & exit tracking with ticket generation
* Fee calculation based on duration
* Real-time parking availability
* Clean frontend UI with React

---

## 🏗 System Architecture

```
Frontend (React)
        ↓
Backend API (Node.js + Express)
        ↓
Service Layer (Business Logic)
        ↓
In-Memory Data Store
```

---

## 🗃 Data Model

### ParkingSpot

```
id, type, isAvailable, floor
```

### Vehicle

```
licensePlate, type
```

### Ticket

```
id, vehicle, spotId, entryTime, exitTime, fee
```

---

## 🎥 Demo

### 📌 Option 1: If video is uploaded to this repo

👉 First upload your video (e.g. `demo.mp4`) to your repo root

Then use:

[![Watch Demo](https://img.shields.io/badge/Click%20to%20Watch-Demo-blue?style=for-the-badge)](./demo.mp4)

---

## 🤝 Let's Connect

If you found this project useful or interesting, feel free to connect with me!

👉 https://www.linkedin.com/in/gaurav-lad137

I’d love to discuss:

* System Design
* Backend Engineering
* Tech & Career Growth 🚀

---

## 👨‍💻 Author

**Gaurav**

* 💼 LinkedIn: https://www.linkedin.com/in/gaurav-lad137
* 📧 Open to opportunities and collaborations

---

⭐ If you found this helpful, don’t forget to star the repo!
