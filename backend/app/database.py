# Database connection configuration
# Uncomment and configure based on your database choice

"""
# SQLite / PostgreSQL with SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.config import settings

engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in settings.DATABASE_URL else {}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
"""

"""
# MongoDB with Motor (async)
from motor.motor_asyncio import AsyncIOMotorClient
from app.config import settings

client = AsyncIOMotorClient(settings.DATABASE_URL)
database = client.get_database()

async def get_database():
    return database
"""
