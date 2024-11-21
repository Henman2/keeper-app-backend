const mongoose = require('mongoose');
const currentTime = require('./currentTime');
const noteSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: {type: 'String', required: true},
    content:{type: 'String', required: true},
    timestamp: { type: String, default: currentTime },
});
const Note = mongoose.model('Note', noteSchema);
module.exports = Note;