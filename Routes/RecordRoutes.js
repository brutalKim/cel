const express = require("express");
const router = express.Router();

const getRecordController = require("../Controller/RecordController/GetRecordController");
const createRecordController = require("../Controller/RecordController/CreateRecordController");
const deleteRecordController = require("../Controller/RecordController/DeleteRecordController");
const modifyRecordController = require("../Controller/RecordController/ModifyRecordController");
router.get("/",(req,res)=>{
    getRecordController(req,res);
});
router.post("/",(req,res)=>{
    createRecordController(req,res);
});
router.delete("/",(req,res)=>{
    deleteRecordController(req,res);
});
router.patch("/",(req,res)=>{
    modifyRecordController(req,res);
})
module.exports = router;