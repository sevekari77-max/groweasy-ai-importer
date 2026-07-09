# GrowEasy AI CSV Importer

An AI-powered CSV Importer that intelligently transforms raw CSV data into CRM-ready leads using Google's Gemini AI.

## Live Demo

**Frontend:**  
https://YOUR-VERCEL-URL.vercel.app

**Backend API:**  
https://YOUR-RENDER-URL.onrender.com

---

## Features

- Upload CSV files
- Preview CSV data before importing
- AI-powered lead extraction using Gemini AI
- Converts raw CSV into structured CRM-ready data
- Displays imported and skipped leads
- Responsive modern UI
- Fully deployed using Vercel and Render

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

### Backend
- Node.js
- Express.js
- TypeScript
- Gemini AI API
- Multer
- Zod
- CSV Parse

---

## Project Structure

```
groweasy-ai-importer/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── types/
│
└── backend/
    ├── controllers/
    ├── services/
    ├── routes/
    ├── middleware/
    ├── ai/
    ├── utils/
    └── validators/
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/sevekari77-max/groweasy-ai-importer.git
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=5000
```

Run:

```bash
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run:

```bash
npm run dev
```

---

## Deployment

### Frontend

- Vercel

### Backend

- Render

---

## API Endpoints

### Preview CSV

```
POST /api/import/preview
```

Uploads a CSV and returns a preview.

---

### Process with AI

```
POST /api/import/confirm
```

Processes previewed rows using Gemini AI and returns CRM-ready leads.

---

## Screenshots

### Upload CSV

(Add Screenshot)

### CSV Preview

(Add Screenshot)

### AI Processing Results

(Add Screenshot)

---

## Author

**Siddharth Sevakari**

GitHub:
https://github.com/sevekari77-max

LinkedIn:
https://www.linkedin.com/in/siddharth-sevekari-ab72b12b7/
