const noteModel = require('../models/noteModel');

//notes
const getNotes = async (req, res, next) => {
    try{
        const notes = await noteModel.find({user: req.user._id}); //get notes by user
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
            {
                user: req.user._id,
                title: req.body.title,
                content: req.body.content
            }
        );
        const savedNote = await noteModel.findById(newNote._id);
        res.status(201).json(savedNote);
    }catch(error){
        console.error(error);
        next(error);
    }
    
}
//notes/updatenote
const updateNote = async (req, res, next) => {
    try {
        const { noteID, title, content } = req.body;
        // Find the note by ID and verify user
        const note = await noteModel.findOne({_id: noteID, user: req.user._id});
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        note.title = title || note.title;
        note.content = content || note.content;
        const updatednote = await note.save();
        res.status(200).json(updatednote);
    } catch (error) {
        console.error(error);
        next(error);
    }
};
//deletenote
const deleteNote = async (req, res, next) => {
    try {
        const { noteID } = req.body;
        const note = await noteModel.findOne({ _id: noteID, user: req.user._id });
        const deletednote = await note.deleteOne();
        res.status(200).json({ message: 'Note deleted successfully', deletednote });
    }catch(error){
        console.error(error);
        next(error);
    }
}

module.exports = {getNotes, createNote, updateNote, deleteNote}