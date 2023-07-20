const mongoose=require('mongoose');

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: email,
        required: true,
        unique: true
    },
    password:{
        type: password,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
  });

  module.exports=mongoose.model('users',UserSchema);