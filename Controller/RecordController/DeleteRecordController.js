const verifyToken = require("../../jwt/verifyToken");
const deleteRecordService = require("../../Service/RecordService/DeleteRecordService");

const DeleteRecordController = async (req,res)=>{
    const authorization = req.headers.authorization;
    const decodedUserId = await verifyToken(authorization);
    if(decodedUserId.valid){
       res.status(await deleteRecordService(decodedUserId.payload.id,req.query.no)).send(); 
    }
    return res.status(decodedUserId.payload).send();
}
module.exports = DeleteRecordController;