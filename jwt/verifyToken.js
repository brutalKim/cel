const jwt = require("jsonwebtoken");
const jwtConfig = require("./jwtConfig.json");

const verifyToken = async(authorization)=>{
    try {
        const decode = await jwt.verify(authorization,jwtConfig.sercretKey);
        return {
            valid:true,
            payload:decode
        }
    } catch (e) {
        console.log(e);
        switch (e.name) {
            case "JsonWebTokenError":
                return {valid:false,payload:401};
            case "TokenExpiredError":
                return {valid:false,payload:419};
            default:
                return {valid:false,payload:500};
        }
    }
}
module.exports = verifyToken;