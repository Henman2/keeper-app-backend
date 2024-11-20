const express = require('express');
const userRouter = express.Router();
const {
  userLogin,
  createUser,
  userLogout,
  updateUser,
} = require('../controllers/userController');

/* users/login */
userRouter.post('/login', userLogin);
/* users/register */
userRouter.post('/register', createUser);
/* users/logout */
userRouter.post('/logout', userLogout);
/* users/update */
userRouter.put('/update', updateUser);
module.exports = userRouter;
