const SignupService = require("../../Service/UserService/SignupService");

const signupController =async(req,res)=>{
    const id =req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;
    const tel = req.body.tel;
    //SignupService
    const status = await SignupService(id,pw,name,tel);
    console.log(status);
    res.send().status(407);
}
module.exports = signupController;