#!/bin/bash

# Start Backend and Frontend concurrently

echo "🚀 Starting ThirtyFour Full-Stack Application..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to cleanup on exit
cleanup() {
    echo -e "\n${GREEN}Shutting down services...${NC}"
    kill $(jobs -p) 2>/dev/null
    exit
}

trap cleanup INT TERM

# Start Backend
echo -e "${BLUE}Starting FastAPI Backend on port 8000...${NC}"
cd backend && source venv/bin/activate && uvicorn main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start Frontend
echo -e "${BLUE}Starting React Frontend on port 3000...${NC}"
cd .. && npm run dev &
FRONTEND_PID=$!

echo -e "${GREEN}✅ Both services are running!${NC}"
echo -e "${GREEN}Frontend: http://localhost:3000${NC}"
echo -e "${GREEN}Backend API: http://localhost:8000${NC}"
echo -e "${GREEN}Backend Docs: http://localhost:8000/docs${NC}"
echo ""
echo "Press Ctrl+C to stop all services"

# Wait for both processes
wait
