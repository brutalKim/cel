const express = require("express");
const router = express.Router();

const getRecordController = require("../Controller/RecordController/GetRecordController");
const createRecordController = require("../Controller/RecordController/CreateRecordController");
router.get("/",(req,res)=>{
    getRecordController(req,res);
});
router.post("/create",(req,res)=>{
    createRecordController(req,res);
});
router.delete("/delete",(req,res)=>{
    
});
module.exports = router;