const verifyToken = require("../../jwt/verifyToken");

const DeleteRecordController = async (req,res)=>{
    const authorization = req.headers.authorization;
    const decodedUserId = await verifyToken(authorization);
    const no = req.body.no;
}
module.exports = DeleteRecordController;