//commonjs
//const express = require("express")

//node 16<

//EsNext (ES module) -import / export syntax
import mongoose, { Mongoose } from "mongoose";
import express, { Application,Request,Response } from "express";
import userRoutes from "./routes/userRoutes";   
import itemRoutes from "./routes/itemRoutes";

// : Application for typesript
const app: Application = express();

//json data parse
app.use(express.json())

//Mount routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/item", itemRoutes);

// app.get("/", (req:Request, res:Response) => {
//     res.send("Hello TS + Express");
// });

// app.post("/api/v1/user", (req:Request, res:Response) => {
//     const userData = req.body;

//     console.log("User data : ",userData);
//     // userData.name
//     // userData.email

//     res.status(201).json({
//         message: "User created successfully",
//         data: userData
//     })
// });

const mongo = mongoose.connect("mongodb://localhost:27017/test1")

mongo.then(() => {
    console.log("Database connected");
})
.catch((err) => {
    console.log(err);
})



app.listen(5000, () => {
    console.log("Server is running on port 5000");
});