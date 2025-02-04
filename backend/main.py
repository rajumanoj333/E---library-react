from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Mock data
books = [
    {"id": 1, "title": "Book One", "author": "Author One", "description": "Description One", "pdf_url": "/path/to/book1.pdf"},
    {"id": 2, "title": "Book Two", "author": "Author Two", "description": "Description Two", "pdf_url": "/path/to/book2.pdf"},
]

class Book(BaseModel):
    title: str
    author: str
    description: str
    pdf_url: str

@app.get("/books", response_model=List[Book])
def get_books():
    return books

@app.get("/books/{book_id}", response_model=Book)
def get_book(book_id: int):
    return next((book for book in books if book["id"] == book_id), None)

@app.get("/books/{book_id}/read")
def read_book(book_id: int):
    book = next((book for book in books if book["id"] == book_id), None)
    if book:
        return {"pdf_url": book["pdf_url"]}
    return {"error": "Book not found"}
