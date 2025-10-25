#!/bin/bash

# Start only the FastAPI Backend

echo "🚀 Starting FastAPI Backend..."

cd backend
source venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000
