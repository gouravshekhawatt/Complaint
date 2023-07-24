const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes = asyncHandler(
    async (req,res) => {

        const notes = await Note.find({user: req.user._id});
        res.json(notes);
        
});



const createNote = asyncHandler(async(req,res) => 
{
    const { name,email,division,location} = req.body;

    if(!name || !email || !division || !location){
        throw new Error ("Please Fill all the Fields");
    }

    else{
        const note = new Note({

            user: req.user._id, name , email , division , location
        });

        const createdNote = await note.save();
        res.status(201).json(createdNote);
    }

})



const getNoteById = asyncHandler(async(req,res) => 
{

    const note = await Note.findById(req.params.id);


    if(note){
        res.json(note);

    }

    else{
        res.status(404).json({
            message:"Note not found"
            
        });
    }

res.json(note);

});






const UpdateNote = asyncHandler (async (req, res) => {
    const {  name , email , division , location} = req.body;



    const note = await Note.findById(req.params.id);


    if(note.user.toString() !== req.user._id.toString()){

        res.status(401);
        throw new Error("You can't perform this action");
 }


 if(note){
note.name = name;
note.email = email;
note.division=division ;
note.location=location ;



const updatedNote = await note.save()
res.json(updatedNote)
 }


 else{

    res.status(404);
    throw new Error("Note not found");

 }


});










const DeleteNote = asyncHandler(async (req,res) => {
    const note = await Note.findById(req.params.id);



    if(note.user.toString() !== req.user._id.toString()){

        res.status(401);
        throw new Error("You can't perform this action");
 }



 if(note){

    await note.remove();
    res.json({ message: "Note Removed"});
 }


 else{

    res.status(404);
    throw new Error("Note not found");

 }

})





module.exports = {getNotes, UpdateNote ,getNoteById ,DeleteNote,  createNote};