const verifyToken = require("../../jwt/verifyToken");
const modifyRecodService = require("../../Service/RecordService/ModifyRecordService");

const ModifyRecordController = async (req,res)=>{
    const authorization = req.headers.authorization;
    const body = req.body;
    const decodedAuthoriztion = await verifyToken(authorization);
    if(decodedAuthoriztion.valid){
        return res.status(await modifyRecodService(decodedAuthoriztion.payload.id,body)).send();
    }
    return res.status(decodedAuthoriztion.payload).send();
}
module.exports = ModifyRecordController;