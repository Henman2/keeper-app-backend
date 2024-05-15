const noteModel = require('../models/noteModel');

//notes
const showNotes = async (req, res, next) => {
    try{
        const notes = await noteModel.find({});
        return res.status(200).json(notes);
    }catch(error){
        console.error(error);
        next(error);
    }
}
const createNote = async (req, res, next) => {
    try {
        const newNote = await noteModel.create(
            {title: req.body.title, content: req.body.content}
        );
        res.status(200).json(
            {title: newNote.title, content: newNote.content}
        );
    }catch(error){
        console.error(error);
        next(error);
    }
    
}
//notes/:noteId
const updateNote = async (req, res, next) => {
    try {
        const { noteID, title, content } = req.body;
        // Find the note by ID and update its title and content
        const updatednote = await noteModel.findByIdAndUpdate(noteID, { title, content }, { new: true });
        if (!updatednote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json(updatednote);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

const deleteNote = async (req, res, next) => {
    try{
        const deletednote = await noteModel.findByIdAndDelete({_id: req.body.noteID});
        res.status(200).json(deletednote);
    }catch(error){
        console.error(error);
        next(error);
    }
}

module.exports = {showNotes, createNote, updateNote, deleteNote}