const mongoose = require('mongoose');
const currentTime = require('./currentTime');
const noteSchema = new mongoose.Schema({
    title: {type: 'String', required: true},
    content:{type: 'String', required: true},
    timestamp: { type: Date, default: currentTime() },
});
const Note = mongoose.model('Note', noteSchema);
module.exports = Note;