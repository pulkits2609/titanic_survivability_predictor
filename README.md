# 🚢 Titanic Survival Predictor

A full-stack Machine Learning web application that predicts whether a passenger aboard the Titanic would survive or not based on passenger-related information such as age, gender, fare, passenger class, and family details.

This project combines Machine Learning, Backend API Development, and Modern Frontend UI Design into a deployable production-ready application.

---

# Live Deployments

## Frontend Deployment
https://titanic-survivability-predictor.vercel.app/

## Backend API Deployment
https://titanic-survivability-predictor.onrender.com/

## Swagger API Documentation
https://titanic-survivability-predictor.onrender.com/docs

---

# Project Objective

The main objective of this project is to predict Titanic passenger survival probability using Machine Learning techniques.

The application allows users to enter passenger details through a modern web interface and receive:

- Survival Prediction
- Survival Probability
- Visual Prediction Feedback

---

# Machine Learning Overview

The project uses the famous Titanic Dataset from Kaggle.

The model was trained to classify whether a passenger would survive or not using passenger attributes such as:

- Passenger Class
- Gender
- Age
- Fare
- Family Information
- Embark Location

---

# Features

- Full-stack Machine Learning Application
- Modern React Dashboard UI
- FastAPI Backend API
- Random Forest Classifier Model
- Feature Engineering
- Real-time Prediction
- Interactive UI Effects
- Cloud Deployment
- Responsive Design
- Swagger API Documentation

---

# Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- shadcn/ui
- Axios
- React Bits

## Backend
- FastAPI
- Uvicorn
- Pydantic

## Machine Learning
- Scikit-learn
- Pandas
- NumPy

## Deployment
- Vercel (Frontend)
- Render (Backend API)

---

# Project Structure

```plaintext
titanic_survivability_predictor/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── runtime.txt
│   │
│   ├── data/
│   │   └── Titanic-Dataset.csv
│   │
│   ├── models/
│   │   ├── titanic_model.pkl
│   │   └── model_columns.pkl
│   │
│   └── notebooks/
│       └── titanic_training.ipynb
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Dataset

Dataset Used:
Titanic Dataset from Kaggle

Dataset includes:
- Passenger Information
- Survival Labels
- Ticket Information
- Passenger Demographics

---

# Feature Engineering

Additional features were created to improve model performance.

## FamilySize
Calculated using:
```python
FamilySize = SibSp + Parch + 1
```

## IsAlone
Determines whether the passenger was travelling alone.

```python
IsAlone = 1 if FamilySize == 1 else 0
```

## Encoded Features
Categorical values such as:
- Sex
- Embarked

were encoded into numerical values for model training.

---

# Machine Learning Model

## Algorithm Used
Random Forest Classifier

## Why Random Forest?
- Performs well on classification problems
- Handles mixed data types efficiently
- Provides good prediction accuracy
- Robust against overfitting

---

# Workflow

```plaintext
User Input
    ↓
React Frontend
    ↓
FastAPI Backend API
    ↓
Feature Engineering & Preprocessing
    ↓
Random Forest ML Model
    ↓
Prediction Result
    ↓
Frontend Visualization
```

---

# API Endpoints

## Home Endpoint
```http
GET /
```

Response:
```json
{
  "message": "Titanic Survival Predictor API Running",
  "status": "online"
}
```

---

## Health Check Endpoint
```http
GET /health
```

Response:
```json
{
  "status": "healthy"
}
```

---

## Prediction Endpoint
```http
POST /predict
```

### Request Body
```json
{
  "Pclass": 3,
  "Sex": "male",
  "Age": 22,
  "SibSp": 0,
  "Parch": 0,
  "Fare": 7.25,
  "Embarked": "S"
}
```

### Response
```json
{
  "prediction": 0,
  "prediction_label": "Did Not Survive",
  "survival_probability": 0.23
}
```

---

# Frontend Features

- Modern Dashboard Layout
- Interactive UI Components
- Progress Bar Visualization
- Responsive Design
- Glassmorphism Styling
- Real-time API Integration
- Animated Click Effects

---

# Local Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/titanic_survivability_predictor.git
```

---

# Backend Setup

## Navigate to backend folder

```bash
cd backend
```

## Create Virtual Environment

```bash
python -m venv .venv
```

## Activate Virtual Environment

### Windows
```bash
.venv\Scripts\activate
```

### Linux/Mac
```bash
source .venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run Backend Server

```bash
uvicorn app:app --reload
```

Backend runs at:
```plaintext
http://127.0.0.1:8000
```

Swagger Docs:
```plaintext
http://127.0.0.1:8000/docs
```

---

# Frontend Setup

## Navigate to frontend folder

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

Frontend runs at:
```plaintext
http://localhost:5173
```

---

# Deployment

## Frontend Deployment
Deployed using Vercel.

## Backend Deployment
Deployed using Render.

---

# Project Highlights

- Full-stack ML architecture
- Cloud deployment
- API integration
- Production-ready UI
- Modern React dashboard
- Real-time ML inference
- Interactive frontend effects

---

# Learning Outcomes

This project helped in understanding:

- Machine Learning Workflow
- Data Preprocessing
- Feature Engineering
- Model Training
- Backend API Development
- Frontend Integration
- Cloud Deployment
- Full-stack Application Architecture

---

#  Author

Pulkit Sharma

---

# Acknowledgements

- Kaggle Titanic Dataset
- FastAPI Documentation
- Scikit-learn Documentation
- shadcn/ui
- React Community

---

# Conclusion

Titanic Survival Predictor is a complete Machine Learning web application that demonstrates how machine learning models can be integrated into real-world deployable applications using modern frontend and backend technologies.

The project combines:
- Data Science
- Machine Learning
- API Development
- Frontend Engineering
- Cloud Deployment

into a single production-ready solution.