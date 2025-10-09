import { Request, Response } from "express";
import { User } from "../models/userModel";
export const createUser = async(req:Request, res:Response) => {

   


    try {
        const {name,email,age}= req.body;
        if (!name || !email) {
            return res.status(400).json({
              message: "User Data not received..",
            });
          }
      
          const exUser = await User.findOne({ email }).then((user) => {
            if (exUser) {
              return res.status(400).json({
                message: "User already exist..",
              });
            }
          });
          
        const newUser = new User({
            //left side from user model : right side for value
            name, //name:name,
            email, //email:email,
            age //age:age
        })
    
        const savedUser = await newUser.save();
    
        res.status(201).json({
            message: "User created successfully",
            data: savedUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Internel server error while creating user..!",
            error: error
        })
        
    }
}

export const getAllUsers = (req:Request, res:Response) => {
    res.send("User List");
}
