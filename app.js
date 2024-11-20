const express = require('express');
const cors = require('cors');
// const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();

//CORS Setup
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", true);
  res.header("Access-Control_Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers","X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  next();
})
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
)
app.set("trust proxy", 1); //properly get the client's IP address.

//set views
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('./public'));

//Express routes
// app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/notes', noteRouter);

module.exports = app;
