# FastAPI Backend

Modern Python backend API built with FastAPI.

## 🚀 Getting Started

### Activate Virtual Environment

```bash
source venv/bin/activate  # On macOS/Linux
```

### Run the Server

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Or use the script from root:

```bash
cd ..
./start-backend.sh
```

## 📁 Project Structure

```
backend/
├── main.py              # Application entry point
├── app/
│   ├── config.py       # Settings & configuration
│   ├── database.py     # Database connection
│   ├── routes/         # API endpoints
│   │   └── example.py  # Example CRUD routes
│   ├── models/         # Data models
│   │   ├── schemas.py  # Pydantic schemas
│   │   └── database.py # Database models
│   └── utils/          # Utilities
│       └── logger.py   # Logging utilities
├── venv/               # Virtual environment
├── requirements.txt    # Python dependencies
└── .env               # Environment variables
```

## 📚 API Endpoints

### Health Check

- `GET /health` - Server health status

### Example CRUD

- `GET /api/example` - List all items
- `GET /api/example/{id}` - Get single item
- `POST /api/example` - Create item
- `PUT /api/example/{id}` - Update item
- `DELETE /api/example/{id}` - Delete item

## 📖 Documentation

FastAPI automatically generates interactive API docs:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## 🗄️ Adding a Database

### 1. Choose Your Database

Uncomment dependencies in `requirements.txt`:

**PostgreSQL**:

```bash
pip install sqlalchemy psycopg2-binary alembic
```

**MongoDB**:

```bash
pip install motor pymongo
```

### 2. Configure Connection

Update `backend/.env`:

```env
DATABASE_URL=postgresql://user:pass@localhost/dbname
# or
DATABASE_URL=mongodb://localhost:27017/dbname
```

### 3. Uncomment Database Code

Enable database setup in:

- `app/database.py`
- `app/models/database.py`

### 4. Create Tables (SQL databases)

```bash
# After uncommenting SQLAlchemy code
python -c "from app.models.database import Base; from app.database import engine; Base.metadata.create_all(bind=engine)"
```

## 📦 Adding New Routes

1. Create a new file in `app/routes/`:

```python
# app/routes/users.py
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_users():
    return {"users": []}
```

2. Import in `main.py`:

```python
from app.routes import users

app.include_router(users.router, prefix="/api/users", tags=["users"])
```

## 🔐 Environment Variables

See `.env.example` for all available configuration options.

Required:

- `DEBUG` - Enable debug mode
- `PORT` - Server port (default: 8000)

Optional:

- `DATABASE_URL` - Database connection string
- `SECRET_KEY` - For JWT authentication
- `ALLOWED_ORIGINS` - CORS origins

## 🧪 Testing

Install test dependencies:

```bash
pip install pytest httpx
```

Create tests:

```python
# tests/test_main.py
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
```

Run tests:

```bash
pytest
```

## 🚀 Deployment

### Production Server

```bash
pip install gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Docker

```dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:

```bash
docker build -t thirtyfour-backend .
docker run -p 8000:8000 thirtyfour-backend
```

## 📝 Common Tasks

### Update Dependencies

```bash
pip freeze > requirements.txt
```

### Format Code

```bash
pip install black
black .
```

### Lint Code

```bash
pip install pylint
pylint app/
```

## 🔧 Tech Stack

- **FastAPI** - Modern web framework
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server
- **Python-dotenv** - Environment management

---

For full application documentation, see the main README in the root directory.
