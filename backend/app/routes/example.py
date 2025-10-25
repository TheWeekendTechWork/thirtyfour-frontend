from fastapi import APIRouter, HTTPException, status
from typing import List
from app.models.schemas import (
    ExampleCreate,
    ExampleUpdate,
    ExampleResponse,
    ApiResponse,
)
from datetime import datetime

router = APIRouter()

# In-memory storage for demo (replace with database in production)
example_db = []
next_id = 1


@router.get("/", response_model=List[ExampleResponse])
async def get_all_examples():
    """Get all examples"""
    return example_db


@router.get("/{item_id}", response_model=ExampleResponse)
async def get_example(item_id: int):
    """Get a specific example by ID"""
    item = next((item for item in example_db if item["id"] == item_id), None)
    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Item with id {item_id} not found",
        )
    return item


@router.post("/", response_model=ExampleResponse, status_code=status.HTTP_201_CREATED)
async def create_example(example: ExampleCreate):
    """Create a new example"""
    global next_id

    new_item = {
        "id": next_id,
        "name": example.name,
        "description": example.description,
        "created_at": datetime.utcnow(),
        "updated_at": None,
    }

    example_db.append(new_item)
    next_id += 1

    return new_item


@router.put("/{item_id}", response_model=ExampleResponse)
async def update_example(item_id: int, example: ExampleUpdate):
    """Update an existing example"""
    item = next((item for item in example_db if item["id"] == item_id), None)

    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Item with id {item_id} not found",
        )

    if example.name is not None:
        item["name"] = example.name
    if example.description is not None:
        item["description"] = example.description

    item["updated_at"] = datetime.utcnow()

    return item


@router.delete("/{item_id}", response_model=ApiResponse)
async def delete_example(item_id: int):
    """Delete an example"""
    global example_db

    item = next((item for item in example_db if item["id"] == item_id), None)

    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Item with id {item_id} not found",
        )

    example_db = [item for item in example_db if item["id"] != item_id]

    return {"success": True, "message": f"Item {item_id} deleted successfully"}
