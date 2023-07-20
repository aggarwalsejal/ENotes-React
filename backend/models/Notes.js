const mongoose=require('mongoose');

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: email,
        required: true
    },
    tag:{
        type: password,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
  });

  module.exports=mongoose.model('notes',NotesSchema);