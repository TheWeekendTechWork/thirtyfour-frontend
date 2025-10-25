from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import example
from app.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION,
    description="ThirtyFour Backend API",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(example.router, prefix="/api/example", tags=["example"])


@app.get("/")
async def root():
    return {
        "message": "Welcome to ThirtyFour API",
        "version": settings.VERSION,
        "docs": "/docs",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": settings.VERSION}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app", host=settings.HOST, port=settings.PORT, reload=settings.DEBUG
    )
