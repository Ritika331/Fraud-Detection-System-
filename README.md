# Real-Time Fraud Detection System

## Overview

This project implements a real-time fraud detection system using a machine learning model integrated into a full-stack application.

It demonstrates how predictive models can be deployed within a system to evaluate transaction risk in real time. The application processes user input through a backend service, which communicates with a machine learning API to generate predictions.


## Key Features

- Real-time fraud prediction using a trained machine learning model  
- Probability-based risk scoring  
- Decision system with three outcomes: Approve, Review, Block  
- End-to-end integration across frontend, backend, and ML services  
- Modular architecture separating UI, backend logic, and ML inference  


## System Architecture

React UI → Spring Boot Backend → FastAPI ML Service → Model Prediction → Response


## How It Works

1. The user enters transaction details (e.g., amount) through the UI  
2. The frontend sends a request to the backend  
3. The backend prepares the input for the machine learning model  
4. The request is forwarded to the ML API  
5. The model returns a fraud probability score  
6. A decision layer classifies the transaction:
   - Probability < 0.3 → Approve  
   - 0.3 to 0.7 → Review  
   - Probability > 0.7 → Block  
7. The result is returned to the frontend and displayed  


## Tech Stack

- Frontend: React  
- Backend: Spring Boot (Java)  
- ML API: FastAPI (Python)  
- Machine Learning: Scikit-learn, NumPy  


## Project Structure

fraud-detection-system/
│
├── ml-api/
├── backend/
├── fraud-ui/
└── README.md


## Setup Instructions

### Clone the repository

git clone <https://github.com/Ritika331/Fraud-Detection-System->  
cd fraud-detection-system  


### Start the ML API

cd ml-api  
pip install -r requirements.txt  
uvicorn app:app --reload  

Runs on: http://127.0.0.1:8000  


### Start the backend

Run the Spring Boot application from your IDE  

Runs on: http://localhost:8080  


### Start the frontend

cd fraud-ui  
npm install  
npm start  

Runs on: http://localhost:3000  


## Example

Input:  
Transaction Amount: 5000  

Output:  
Decision: Block  
Fraud Probability: 80.80%  


## Team Contribution

**Ritika Srivastava**

Built and trained a fraud detection model with preprocessing, feature scaling, and class imbalance handling

Developed ML inference API using FastAPI to serve real-time predictions

Implemented probability-based fraud scoring and threshold-driven decision logic (Approve / Review / Block)

Integrated ML service with Spring Boot backend for seamless API orchestration

Transformed frontend inputs into model-compatible feature vectors and handled cross-service communication

Contributed to React frontend by integrating APIs and displaying real-time prediction results

Performed debugging and testing to ensure smooth end-to-end system functionality

**Md Asad Anwer**

Designed and validated a machine learning model for fraud detection with feature engineering and evaluation

Built and tested FastAPI endpoints for real-time inference and prediction workflows

Implemented decision-layer logic based on fraud probability for practical system outcomes

Developed backend services using Spring Boot to handle client requests and coordinate ML predictions

Ensured reliable frontend-backend communication through proper request handling and JSON mapping

Developed React UI for transaction input and fraud result visualization

Optimized system performance and contributed to debugging across the full stack

## Notes

The dataset used in this project contains anonymized features. In real-world applications, such features are generated automatically from transaction behavior and metadata.


## Future Improvements

- Add user transaction history and profiling  
- Integrate a database for logging and analytics  
- Deploy services to cloud platforms  
- Improve feature engineering and model performance  
