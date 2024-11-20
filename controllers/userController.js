const userLogin = async (req, res) => { 
    res.send('user logged in');
}
const userLogout = async (req, res) => {
    res.send('user logged out');
}
const createUser = async (req, res) => { 
    res.send('new user created');
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

