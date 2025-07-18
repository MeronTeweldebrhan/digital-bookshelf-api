# Digital Bookshelf API

This is a RESTful API for managing books and users, supporting features like creating books, liking books, posting reviews, and user management.



## Base URL



## Book Routes

| Method | Endpoint           | Description                   | Request Body                 |
|--------|--------------------|-------------------------------|------------------------------|
| POST   | `/books`           | Create a new book             | JSON book object             |
| GET    | `/books`           | Get all books                 |                              |
| GET    | `/books/:id`       | Get book by ID                |                              |
| PUT    | `/books/:id`       | Update book by ID             | JSON updated book object     |
| DELETE | `/books/:id`       | Delete book by ID             |                              |
| POST   | `/books/:id/like`  | Update book likes (increment) | `{ "value": 1 }` ` |



## User Routes

| Method | Endpoint                        | Description                     | Request Body               |
|--------|--------------------------------|--------------------------------|------------------------------|
| POST   | `/users`                      | Create a new user               | JSON user object             |
| GET    | `/users`                      | Get all users                  |                               |
| POST   | `/users/:userId/reviews/:bookId` | Add a review to a book by user | `{ "rating": 1-5 }`        |
| POST   | `/users/:userId/likes/:bookId` | User likes a book              | No body required             |

---

## Notes

- Review rating must be a number between 1 and 5.
- Like value must be 1 (like) or -1 (unlike).
- All endpoints expect JSON content type for POST/PUT requests.
- IDs refer to MongoDB ObjectIds.

---

## Setup & Run

1. Install dependencies:
2. Start server:`npm run dev`
3. API will run on `http://localhost:5000/api`
