# 📁 E-Scan – Smart Document Management System

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000?style=flat-square&logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=flat-square&logo=render&logoColor=white)

> A full-stack **document management system** with **OCR-based text extraction** — upload, scan, edit, and manage documents through a cloud-hosted web interface.

🔗 **Live App:** [e-scan.vercel.app](https://e-scan.vercel.app) &nbsp;|&nbsp; **Backend:** Render &nbsp;|&nbsp; **DB:** MongoDB Atlas

---

## ✨ Features

### 👤 User Management
- User login and authentication
- Add and update user details
- Secure data storage in MongoDB

### 📄 Document Management
- Upload, view, preview, download, and delete documents
- File handling with **Multer**
- Document metadata stored in MongoDB Atlas

### 🔍 OCR Processing
- Scan uploaded documents to extract text automatically
- Save extracted data directly to the database
- Edit, add, or remove OCR-extracted fields before saving

### ☁️ Cloud Deployment
- Frontend on **Vercel**
- Backend on **Render**
- Database on **MongoDB Atlas**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Axios, CSS3 |
| **Backend** | Node.js, Express.js, REST API |
| **Database** | MongoDB Atlas, Mongoose |
| **File Upload** | Multer |
| **OCR** | EasyOCR / Tesseract |
| **Deployment** | Vercel (frontend), Render (backend) |

---

## 🏗️ Architecture

```
  User (Browser)
       │
       ▼
  React Frontend (Vercel)
       │  Axios HTTP requests
       ▼
  Express.js Backend (Render)
       │
       ├─▶ User APIs       → MongoDB Atlas (Users Collection)
       ├─▶ Document APIs   → MongoDB Atlas (Documents Collection)
       │       └── Multer  → File Storage (Server)
       └─▶ OCR APIs        → OCR Engine → MongoDB Atlas (OCR Data)
```

---

## 📡 API Endpoints

### User APIs
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/users/login` | Login user |
| `POST` | `/api/users/add` | Add new user |
| `PUT` | `/api/users/update/:id` | Update user details |

### Document APIs
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/documents/upload` | Upload a document |
| `GET` | `/api/documents` | Get all documents |
| `DELETE` | `/api/documents/:id` | Delete a document |
| `POST` | `/api/documents/scan/:id` | Scan document with OCR |
| `PUT` | `/api/documents/ocr/:id` | Update OCR extracted data |

---

## 📂 Project Structure

```
E-Scan/
├── src/
│   ├── components/          # React components
│   ├── styles/              # CSS stylesheets
│   └── img/                 # Static assets
├── models/                  # Mongoose schemas
├── uploads/                 # Uploaded files (Multer)
├── server.js                # Express server entry point
├── package.json
└── .env                     # Environment variables (not committed)
```

---

## ⚙️ Run Locally

**1. Clone the repo**
```bash
git clone https://github.com/sinchanadk052/E-scan.git
cd E-scan
```

**2. Install dependencies**
```bash
npm install
```

**3. Create a `.env` file**
```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

**4. Start the backend**
```bash
npm start
```

**5. Start the frontend**
```bash
cd src
npm start
```

Frontend → `http://localhost:3000`  
Backend → `http://localhost:5000`

---

## 🔄 User Workflow

1. User logs into the system
2. Uploads a document through the UI
3. File is stored on the server via Multer
4. Document metadata saved to MongoDB
5. User triggers OCR scan on the document
6. Text is extracted and saved to the database
7. User reviews, edits, or deletes extracted fields
8. Final data saved — document can be viewed, downloaded, or deleted

---

## 🔮 Future Enhancements

- [ ] JWT-based authentication
- [ ] Role-based access control
- [ ] Full-text document search
- [ ] PDF OCR support
- [ ] Email notifications
- [ ] Document version history
- [ ] Dashboard analytics

---

## 👩‍💻 Author

**Sinchana DK** — [@sinchanadk052](https://github.com/sinchanadk052)
