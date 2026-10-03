# 🌍 Wanderlust

> A full-stack travel listing platform for discovering, creating, and reviewing places to stay.

Wanderlust is a full-stack web application inspired by modern travel and accommodation platforms. It allows users to explore listings, create and manage their own listings, upload images, view locations on a map, and share reviews and ratings.

## 🌐 Live Demo

🔗 **Live Demo:** https://major-project-r0r8.onrender.com/listings

---

## ✨ Features

- 🏠 Browse travel and accommodation listings
- ➕ Create new listings
- ✏️ Edit and manage listings
- 🗑️ Delete listings
- 🔐 User authentication and sessions
- ⭐ Reviews and ratings
- 🖼️ Image uploads
- ☁️ Cloud-based image storage
- 🗺️ Map-based location display
- 📱 Responsive web interface
- 🛡️ Server-side validation and authentication middleware

---

## 🛠️ Tech Stack

### Frontend

- HTML
- CSS
- JavaScript
- Bootstrap
- EJS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Express Session
- Passport.js

### Other Tools & Services

- Cloudinary
- Mapbox
- Git & GitHub

---

## 📸 Screenshots

Screenshots of the application can be added here.

---

## 🏗️ Project Structure

```text
Wanderlust/
├── controllers/
├── init/
├── model/
├── public/
├── routes/
├── utils/
├── views/
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
└── package.json
```
## ⚙️ Getting Started

### 1. Clone the repository

    git clone https://github.com/pandeypallawi64-del/Wanderlust.git
    cd Wanderlust

### 2. Install dependencies

    npm install

### 3. Configure environment variables

Create a `.env` file and add the required environment variables for your MongoDB database, Cloudinary, Mapbox, and session configuration.

Example:

    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_KEY=your_cloudinary_key
    CLOUDINARY_SECRET=your_cloudinary_secret
    MAP_TOKEN=your_mapbox_token
    ATLASDB_URL=your_mongodb_connection_string
    SECRET=your_session_secret

Never commit your `.env` file or API keys to GitHub.

### 4. Start the application

    npm start

---

## 🔄 How It Works

1. Users browse available travel listings.
2. Users can view listing details and locations.
3. Authenticated users can create and manage listings.
4. Images are uploaded and stored using cloud storage.
5. Users can leave reviews and ratings.
6. Locations can be displayed using interactive maps.
7. The backend handles authentication, validation, database operations, and application logic.

---

## 👩‍💻 Author

### Pallawi Pandey

BCA Computer Science Student | Full-Stack Developer

- 💼 LinkedIn: https://www.linkedin.com/in/pallawi-pandey-392183357/
- 🐙 GitHub: https://github.com/pandeypallawi64-del/

---

⭐ If you find this project interesting, feel free to explore the repository and live demo.
