const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();
const cookieParser = require('cookie-parser');

const whitelist = [
  'http://localhost:3000',
  'https://keeper-app-frontend-eta.vercel.app',
];
const corsOptionsDelegate = (req, callback) => {
    const origin = req.header('Origin');
    if (whitelist.includes(origin)) {
      callback(null, {
        credentials: true,
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      });
    } else {
      console.error(`CORS blocked for origin: ${origin}`);
      callback(null, { origin: false });
    }
};
app.use(cors(corsOptionsDelegate)); 

app.set("trust proxy", 1); //properly get the client's IP address.

// Set views
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./public'));

// Express routes
app.use('/users', userRouter);
app.use('/notes', noteRouter);

module.exports = app;
