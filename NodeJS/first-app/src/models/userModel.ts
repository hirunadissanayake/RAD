import mongoose, {Document, Schema,}  from "mongoose";

//Define typesript unterface for user
export interface Iuser extends Document {
    name: string;
    email: string;
    age?: number;
    
}

const userScheme = new Schema<Iuser>(
    {
        name:{type: String, required: true},
        email:{type: String,required: true},
        age:{type: Number, required: false},
    },
    {
        timestamps: true
    }
)

    export const User = mongoose.model<Iuser>("User", userScheme);