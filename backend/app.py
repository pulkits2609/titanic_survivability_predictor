from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from pathlib import Path

import pandas as pd
import pickle

# PATH SETUP

BASE_DIR = Path(__file__).resolve().parent

MODEL_PATH = BASE_DIR / "models" / "titanic_model.pkl"
COLUMNS_PATH = BASE_DIR / "models" / "model_columns.pkl"

# LOAD MODEL

with open(MODEL_PATH, "rb") as f:
    model = pickle.load(f)

with open(COLUMNS_PATH, "rb") as f:
    model_columns = pickle.load(f)

# FASTAPI INIT

app = FastAPI(
    title="Titanic Survival Predictor API",
    description="Machine Learning API for predicting Titanic passenger survival.",
    version="1.0.0"
)

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change later for production security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# INPUT SCHEMA

class PassengerData(BaseModel):
    Pclass: int
    Sex: str
    Age: float
    SibSp: int
    Parch: int
    Fare: float
    Embarked: str

# ROUTES

@app.get("/")
def home():
    return {
        "message": "Titanic Survival Predictor API Running",
        "status": "online"
    }

@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }

@app.post("/predict")
def predict(data: PassengerData):

    # FEATURE ENGINEERING

    family_size = data.SibSp + data.Parch + 1

    is_alone = 1 if family_size == 1 else 0

    # BUILD INPUT DATAFRAME

    input_data = pd.DataFrame([{
        "Pclass": data.Pclass,
        "Age": data.Age,
        "SibSp": data.SibSp,
        "Parch": data.Parch,
        "Fare": data.Fare,
        "FamilySize": family_size,
        "IsAlone": is_alone,

        # Sex Encoding
        "Sex_male": 1 if data.Sex == "male" else 0,

        # Embarked Encoding
        "Embarked_Q": 1 if data.Embarked == "Q" else 0,
        "Embarked_S": 1 if data.Embarked == "S" else 0,

        # Title Features
        "Title_Miss": 1 if data.Sex == "female" else 0,
        "Title_Mr": 1 if data.Sex == "male" else 0,
        "Title_Mrs": 0,
        "Title_Rare": 0
    }])

    # MATCH TRAINING COLUMNS

    input_data = input_data.reindex(
        columns=model_columns,
        fill_value=0
    )

    # PREDICTION

    prediction = model.predict(input_data)[0]

    probability = model.predict_proba(input_data)[0][1]

    # RESPONSE

    return {
        "prediction": int(prediction),

        "prediction_label":
            "Survived"
            if prediction == 1
            else "Did Not Survive",

        "survival_probability":
            round(float(probability), 4)
    }