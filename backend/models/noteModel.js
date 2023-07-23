const mongoose = require("mongoose");


const noteSchema = mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
    },
    
    division: { // New field: division
      type: String,
      required: true
    },
   
    location: { // New field: location
      type: String,
      required: true
      
    },
    isadmin: {
      // For future
      type: Boolean,
      required: true,
      default: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId ,
        required: true,
        ref: "User"
     }
    },
 
  {
    timestamps: true,
  }
);




const Note = mongoose.model("Note", noteSchema);

module.exports = Note;