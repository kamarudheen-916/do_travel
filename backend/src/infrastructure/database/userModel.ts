import mongoose, { Schema } from "mongoose";
import User from "../../domain_entities/user";

const UserSchema : Schema<User> = new Schema({
    id:{
        type: String
    },
    firstName: {
        type:String,
        required:true
    },
    secondName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    isBlocked: {
        type:Boolean
    },
    gender:{
        type:String
    },
    DOB:{
        type: Date
    },
    Country:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    MobileNumber:{
        type:String
    },
    City:{
        type:String,
        required:true
    },
    favoritePlace:{
        type:[String],
        required:true
    },
    Profile:{
        type:String,
        required:true
    }
})

const UserModel = mongoose.model<User>('User',UserSchema);
export {UserModel}