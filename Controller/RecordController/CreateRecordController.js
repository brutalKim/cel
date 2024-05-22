const jwt = require("jsonwebtoken");
const jwtConfig = require("../../jwt/jwtConfig.json");

const CreateRecordController = async(req,res)=>{
    const authorization = req.headers.authorization;
    const decodedUserId = jwt.verify(authorization,jwtConfig.sercretKey).id;
    
}
exports.module = CreateRecordController;