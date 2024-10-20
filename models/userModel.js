import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
    );

    //Add user defined method - matchedPassword to userSchema
    userSchema.methods.matchPassword = async function (enteredPassword) {
    // Compares entered password with the stored (hashed) password for the user
    return await bcrypt.compare(enteredPassword, this.password);
    };
    //hash the user password before saving
    userSchema.pre('save', async function (next) {
    // Check if the password field is modified; if not, skip hashing and proceed.
    if (!this.isModified('password')) {
        return next();
    }
    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
const User = mongoose.model('User', userSchema);
export default User;
