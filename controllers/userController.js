const userModel = require('../models/userModel');
const generateJWT = require('../utiliti/generateJWT');

const userLogin = async (req, res) => { 
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user && (await user.matchPassword(password))) { 
            generateJWT(res, user._id);
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        }
        else {
            res.status(401).send('invalid user email or password');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

}

const userLogout = async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).send('User logged out successfully');
}
const createUser = async (req, res) => { 
     const { name, email, password, confirmPassword } = req.body; 
    try {
        const existUser = await userModel.findOne({ email });
        if (existUser) {
            return res.status(400).send('User with the email already exists');
        }
        if (password !== confirmPassword) { 
            return res.status(400).send('Passwords do not match');
        }
        const newUser = new userModel ({
            name,
            email,
            password,
        });
        await newUser.save();
        const token = generateJWT(res, newUser._id);
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token
        });
        
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

}
const updateUser = async (req, res) => {
    res.send('user data updated');
}
module.exports = { 
    userLogin, 
    createUser, 
    userLogout, 
    updateUser 
};

