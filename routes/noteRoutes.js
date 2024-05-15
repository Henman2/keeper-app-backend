const express = require('express');
const noteRouter = express.Router();
const noteController = require('../controllers/noteController'); 

/* GET home page. */
noteRouter.get('/', noteController.showNotes );
noteRouter.post('/newnote', noteController.createNote);
noteRouter.delete('/deletenote', noteController.deleteNote);
noteRouter.put('/updatenote', noteController.updateNote);

module.exports = noteRouter;