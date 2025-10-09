import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Item routes");
});

router.post("/", (req:Request, res:Response) => {
    const data = req.body;

    console.log("Item data : ",data);
    

    res.status(201).json({
        message: "Item created successfully",
        data: data
    })
});

export default router;