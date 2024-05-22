
const verifyToken = require("../../jwt/verifyToken");
const getRecordService = require("../../Service/RecordService/GetRecordService");

const GetRecord = async(req,res)=>{
    const authorization = req.headers.authorization;
    const decodedAuthoriztion = await verifyToken(authorization);
    if(decodedAuthoriztion.valid){
        const data = await getRecordService(decodedAuthoriztion.payload.id);
        if(data == 500){
            return res.status(500).send();
        }
        return res.status(200).send(data);
    }
    return res.status(decodedAuthoriztion.payload).send();
}
module.exports = GetRecord;