from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ExampleBase(BaseModel):
    name: str
    description: str


class ExampleCreate(ExampleBase):
    pass


class ExampleUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None


class ExampleResponse(ExampleBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class ApiResponse(BaseModel):
    success: bool
    message: Optional[str] = None
    data: Optional[dict] = None
