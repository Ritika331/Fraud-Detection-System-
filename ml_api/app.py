from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np

app = FastAPI()

# Load trained model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

# Request body schema
class InputData(BaseModel):
    data: list

# Root endpoint
@app.get("/")
def home():
    return {"message": "Fraud Detection API is running"}

# Prediction endpoint
@app.post("/predict")
def predict(input: InputData):
    try:
        # Convert input to numpy array
        data_array = np.array(input.data).reshape(1, -1)

        # Get fraud probability (class 1)
        prob = model.predict_proba(data_array)[0][1]

        # Decision logic (real-world style)
        if prob < 0.3:
            decision = "Approve"
        elif prob < 0.7:
            decision = "Review"
        else:
            decision = "Block"

        return {
            "fraud_probability": float(prob),
            "decision": decision
        }

    except Exception as e:
        return {
            "error": str(e)
        }