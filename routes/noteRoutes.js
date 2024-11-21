const express = require('express');
const noteRouter = express.Router();
const { auth } = require('../middlewares/authenticate');

const {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
} = require('../controllers/noteController'); 

noteRouter.get('/', auth, getNotes );
noteRouter.post('/newnote', auth, createNote);
noteRouter.delete('/deletenote', auth, deleteNote);
noteRouter.put('/updatenote',auth,  updateNote);

module.exports = noteRouter;