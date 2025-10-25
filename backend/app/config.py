from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    APP_NAME: str = "ThirtyFour API"
    VERSION: str = "1.0.0"
    DEBUG: bool = True
    HOST: str = "0.0.0.0"
    PORT: int = 8000

    # CORS settings
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "https://thirty-four.co.in",
        "https://www.thirty-four.co.in",
        "https://thirtyfour-frontend.onrender.com",  # Keep Render URL as backup
    ]

    # Database settings (uncomment and configure as needed)
    # DATABASE_URL: str = "sqlite:///./app.db"
    # For PostgreSQL: "postgresql://user:password@localhost/dbname"
    # For MongoDB: "mongodb://localhost:27017/dbname"

    # JWT settings (if implementing authentication)
    # SECRET_KEY: str = "your-secret-key-change-this"
    # ALGORITHM: str = "HS256"
    # ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
