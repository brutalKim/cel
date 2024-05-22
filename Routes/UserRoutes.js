const express = require("express");
const router = express.Router();
const signupController = require("../Controller/UserController/SignupController");
const loginController = require("../Controller/UserController/LoginController");
router.post("/signup",(req,res)=>{
    signupController(req,res);
});

router.post("/login",(req,res)=>{
    loginController(req,res);
});
module.exports = router;