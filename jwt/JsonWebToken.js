const jsonwebtoken = require("jsonwebtoken");
const jwtConfig = require("./jwtConfig.json");

export function getToken(id){
    return jsonwebtoken.sign({id:"id"},jwtConfig.sercretKey);
}
export function verifyToken(token){
    return jsonwebtoken.verify(token,jwtConfig.sercretKey);
}