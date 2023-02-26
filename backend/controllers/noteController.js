const Note = require("../models/noteModel");
const asyncHandler=require("express-async-handler");
const getNotes = asyncHandler(async(req,res)=>{
        const notes = await Note.find(req.params.id);
        res.json(notes);
    }
)
const createNote=asyncHandler(
    async(req,res)=>{
        const {title,content,imageURL} =req.body;
        if(!title || !content || !imageURL){
            res.status(400);
            throw new Error("Please fill all the fields");
        }
        else{
            const note = new Note(
                {title:req.body.title,
                content:req.body.content,
                imageURL:req.body.imageURL,
                id:req.body.id});
            const createdNote = await note.save();
            res.json(createdNote);
        }
    }
)
const getNoteById=asyncHandler(
    async(req,res)=>{
        const note = await Note.findById(req.params.id);
        if(note){
            res.json(note);
        }
        else{
            res.status(404).json({message:"Note not found"});
        }
       
    }
)
const updateNote=asyncHandler(
    async(req,res)=>{
        const {title,content,imageURL,id} = req.body;
        const note = await Note.findById(req.params.id);
        if(note){
            note.title=title;
            note.content=content;
            note.imageURL=imageURL;
            note.id=id;

            const updatedNote = await note.save();
            res.json(updatedNote);
        }
        else
        {
            res.status(404).json({message:"Note not found"});
        }
    }
)
const deleteNote=asyncHandler(
    async(req,res)=>{
        // const {title,content,imageURL,id} = req.body;
        const note = await Note.findById(req.params.id);
        if(note){
           await note.remove();
           res.json({message:"Note removed"});

        
        }
        else
        {
            res.status(404).json({message:"Note not found"});
        }
    }
)


module.exports={getNotes,createNote,getNoteById,updateNote,deleteNote};