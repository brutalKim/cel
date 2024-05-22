const LoginService = require("../../Service/UserService/LoginService");

const LoginController = async(req,res)=>{
    const id = req.body.id;
    const pw = req.body.pw;
    const result = await LoginService(id,pw);
    if(result.status == 200){
        res.status(result.status);
        res.setHeader('Authorization',result.token);
        return res.end();
    }
    res.status(result.status);
    return res.end();
    
}
module.exports = LoginController;