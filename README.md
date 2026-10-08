# 🌱 KrishiMind AI

**AI-powered smart farming platform for crop disease detection and agriculture assistance.**

KrishiMind AI combines a React/Vite frontend with a Flask + TensorFlow backend. Users can upload a crop-leaf image and receive an AI-generated disease prediction with a confidence score.

## ✨ Key Features

- 🌿 AI crop disease scanner
- 📷 Crop image upload and preview
- 🤖 TensorFlow/EfficientNet prediction
- 📊 Disease prediction confidence score
- 🌾 Crop recommendation concept
- 🌦 Weather information concept
- 💰 Mandi/market price concept
- 🔐 Firebase email authentication
- 📱 Responsive React interface

## 🧰 Tech Stack

**Frontend:** React, Vite, Tailwind CSS, React Router  
**Backend:** Python, Flask, Flask-CORS  
**AI/ML:** TensorFlow, Keras, EfficientNet, NumPy  
**Authentication:** Firebase Authentication

## 📁 Structure

```
krishimind-ai/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── model/
│       └── class_names.txt
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Run Frontend

```bash
npm install
npm run dev
```

## 🐍 Run Backend

Install Python dependencies:

```bash
cd backend
pip install -r requirements.txt
python app.py
```

The frontend scanner currently expects the backend prediction endpoint at `http://127.0.0.1:5000/predict`.

## ⚠️ Model File

The trained `.keras` model is intentionally not committed to this repository because it is approximately 37 MB. Place the trained model at:

`backend/model/plant_disease_efficientnet.keras`

The repository's `.gitignore` also excludes local model files.

## 📌 Project Status

This project is an active learning and development project focused on applying AI to practical agriculture use cases.

---
Built by **Pratyush Kumar Chaubey**.
