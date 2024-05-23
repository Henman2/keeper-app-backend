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
};
//notes/newnote
const createNote = async (req, res, next) => {
    try {
        const newNote = await noteModel.create(
            {title: req.body.title, content: req.body.content}
        );
        const savedNote = await noteModel.findById(newNote._id);
        res.status(200).json(savedNote);
    }catch(error){
        console.error(error);
        next(error);
    }
    
}
//notes/updatenote
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
//deletenote
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