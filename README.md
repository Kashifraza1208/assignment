# Hosted URL : https://assignment-avy4.onrender.com/

 **Technology Stack:**
Node.js and npm
Express.js or another suitable Node.js framework
A database of your choice (MongoDB, PostgreSQL, MySQL, etc.)
jsonwebtoken library for JWT generation and validation
Use React.js for component structure and functionality.
Signup Screen:
Include fields for username/email, password (with confirmation), and optional fields like name and profile picture.
Implement validation for the required fields and email format using React state management and validation libraries.
Include terms and conditions checkbox.
Display clear error messages and success messages.
Simulate sending a welcome email notification upon successful signup (no actual email sending required).
Redirect to the post list screen after successful signup using React Router.
General Requirements:


**Post list Screen:**
There should be a screen where user can scroll infinitely and posts will be rendered using GET api of posts. 
Implement responsive design using Tailwind.
Ensure the screens are visually appealing and consistent with the "MelodyVerse" theme (design details left to your interpretation).
Submit your code as a zip file or a link to a public repository.
API Endpoints:
POST /signup:
Registers a new user with provided username, email, and password.
Validates input, ensures unique usernames and emails, hashes passwords securely.
Stores user data in the database.
Returns a success message and JWT token upon successful registration.

GET /posts:
Paginated implementation of fetching posts data from database.
Should be secure and non authenticated apis should be rejected. 

JWT Implementation:
Generate JWT tokens with appropriate payload and expiration time upon successful login.
Validate JWT tokens in protected routes to ensure user authentication.
Implement robust token refresh mechanisms if desired.
