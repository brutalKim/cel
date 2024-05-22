const jwt = require("jsonwebtoken");
const jwtConfig = require("../../jwt/jwtConfig.json");

const getRecordService = require("../../Service/RecordService/GetRecordService");

const GetRecord = async(req,res)=>{
    const authorization = req.headers.authorization;
    try {
        const decodedUserId = await jwt.verify(authorization,jwtConfig.sercretKey).id;
        const result = await getRecordService(decodedUserId);
        if(result ==500){
            return res.status(500).send();
        }
        return res.status(200).send(result);
    } catch (e) {
        console.log(e);
        switch (e.name) {
            case "JsonWebTokenError":
                res.status(401).send();
                break;
            case "TokenExpiredError":
                res.status(419).send();
                break;
            default:
                res.status(500).send();
        }
    }
};
module.exports = GetRecord;