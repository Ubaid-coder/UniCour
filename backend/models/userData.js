import mongoose from "mongoose";

const userschema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type:String
    },
    msg:{
        type:String
    }
})

export const User = mongoose.model('userMessages', userschema) || mongoose.models('userMessages');
