
const jwt = require('jsonwebtoken');
const generateJWT = (res, userId) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({userId}, secretKey, { expiresIn: '30d' });
    //Set JWT as HTTP-Only cookies - prevents the cookie from being accessed via JavaScript
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict',  // Prevent CSRF attacks
        maxAge: 30*24*60*60*1000, //30days
    })
}
module.exports = generateJWT;