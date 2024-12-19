const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();
const cookieParser = require('cookie-parser');

// CORS Setup
const allowedOrigins = [
  'http://localhost:3000',
  'https://keeper-app-frontend-eta.vercel.app',
];
app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps, curl, etc.)
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  })
);
app.set('trust proxy', 1); // Properly get the client's IP address

// Set views
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./public'));

// Express routes
app.use('/users', userRouter);
app.use('/notes', noteRouter);

module.exports = app;
