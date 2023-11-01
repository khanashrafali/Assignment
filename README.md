**Bookstore API**

Welcome to the Bookstore API. This API allows you to manage a collection of books, providing Create, Read, Update, and Delete (CRUD) operations. Here, we'll guide you through setting up and using the API effectively.

**Table of Contents**

API Endpoints
Setup and Run

Assumptions and Decisions

API Endpoints

1. **Add a New Book**

   Endpoint: POST /api/books

Request Body:

json

Copy code

{
"title": "Your Book Title",

"author": "Book Author",

"summary": "A brief summary of the book."

}

**Response:**

200 OK: Book created successfully.

400 Bad Request: Validation errors or if the book already exists. 2. Get a List of All Books

Endpoint: GET /api/books

**Response:**

200 OK: List of books.

404 Not Found: If no books are available. 3. Get Book Details by ID

Endpoint: GET /api/books/:id

**Response:**

200 OK: Book details.

404 Not Found: If the book with the specified ID does not exist. 4. Update Book Details by ID

Endpoint: PUT /api/books/:id

Request Body: Updated book details.

**Response:**

200 OK: Book updated successfully.

404 Not Found: If the book with the specified ID does not exist. 5. Delete a Book by ID

Endpoint: DELETE /api/books/:id

**Response:**

200 OK: Book deleted successfully.

404 Not Found: If the book with the specified ID does not exist.

**Setup and Run**

To set up and run the application locally, follow these steps:

**Clone the Repository:**

bash

Copy code

git clone https://github.com/khanashrafali/Assignment.git

cd Assignment

**Install Dependencies:**

bash

Copy code

npm install

**MongoDB Setup:**

Make sure you have MongoDB installed and running.

Update the MongoDB connection URL in config/db.js.

**Start the Server:**

bash

Copy code

node index.js

The server should now be running on http://localhost:4000. You can change the port in index.js.

**Testing the API:**

Use tools like Postman or curl to interact with the API endpoints as described in the API Endpoints section.

**Assumptions and Decisions**

During the development of this application, we made a few assumptions and decisions:

**Validation:**  
We've implemented input validation to ensure the integrity of data. For example, a book with the same title and author is considered a duplicate.

**Error Handling:**  
 The API returns appropriate HTTP status codes and error messages for different scenarios.

**Database:**  
 We're using MongoDB as the database. Ensure it's properly configured and running.

**CORS:**  
 For simplicity, we've allowed all origins using CORS. In a production environment, configure CORS based on your requirements.

**Port:**  
 The API is set to run on port 4000. You can change this in the index.js file.
