const verifyToken = require("../../jwt/verifyToken");
const createRecordService = require("../../Service/RecordService/CreateRecordService");

const CreateRecordController = async(req,res)=>{
    const authorization = req.headers.authorization;
    const data = req.body;
    const decodedAuthoriztion = await verifyToken(authorization);
    if(decodedAuthoriztion.valid){
        return res.status(await createRecordService(decodedAuthoriztion.payload.id,data)).send();
    }
    return res.status(decodedAuthoriztion.payload).send();
}
module.exports = CreateRecordController;