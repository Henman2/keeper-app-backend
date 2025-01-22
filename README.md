keeper-App-Backend

Overview
The backend of the Keeper app is built using Node.js, Express, and MongoDB. It handles API requests for creating, updating, deleting, and fetching notes. User authentication and authorization are implemented using JWT (JSON Web Tokens). The production version of the backend is hosted on render.

Installation
1. Clone the repository for the backend:
    git clone <backend-repo-url>

2. Navigate to the backend directory:
    cd keeper-app-backend

3. Install dependencies:
 npm install

4. Set up environment variables (e.g., MongoDB URI, JWT secret) in a .env file:

    MONGO_URI=your_mongodb_connection_string  
    JWT_SECRET=your_jwt_secret  
    NODE_ENV=development  # Use 'production' when deploying  
    PORT=3800  # Default port for the server  

5. Start the backend server:
    npm start

The backend will run on http://localhost:3800.

Backend Technologies Used
    Node.js
    Express
    MongoDB (via Mongoose): Database for storing user and note data.
    JWT Authentication: Secures API endpoints using JSON Web Tokens stored in secure httpOnly cookies.
    Bcrypt: Hashes user passwords for secure storage.
    dotenv: Manages environment variables securely.
    cors: Enables cross-origin requests between the frontend and backend.

    
Authentication Details
    JWT with httpOnly Cookies:
    Tokens are sent to the client via httpOnly cookies, preventing them from being accessed through JavaScript. This enhances security against XSS attacks.

Session Management:
The client stores the JWT in a secure, non-accessible cookie and includes it in subsequent API requests automatically.

API Endpoints

    GET /notes: Fetch all notes (requires authentication)
    POST /notes/newnote: Create a new note (requires authentication)
    PUT /notes/updatenote: Update an existing note (requires authentication)
    DELETE /notes/deletenote: Delete a note (requires authentication)

For user:
  1. POST /users/register: Register a new user.
  2. POST /users/login: Authenticate an existing user and return a JWT token.
  3. GET /users/profile: Fetch the authenticated user's profile (requires authentication).
  4. PUT /users/profile/update: Update the authenticated user's profile (requires authentication).
  5. POST /users/logout: Log out the authenticated user (requires authentication).

License
This project is licensed under the MIT License.