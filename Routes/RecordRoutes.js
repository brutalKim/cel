const express = require("express");
const router = express.Router();

const GetRecord = require("../Controller/RecordController/GetRecordController");

router.get("/",(req,res)=>{
    GetRecord(req,res);
});
router.post("/create",(req,res)=>{
    
});
router.delete("/delete",(req,res)=>{

});
module.exports = router;