const pool = require("../../DB/DBpoolConnection");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../../jwt/jwtConfig.json");
const createHashedPassword = require("../../DB/Crypto");


const LoginService = async(id,pw)=>{
    let conn = null;
    try {
        conn = await pool.getConnection();
        const sql = "SELECT * FROM users WHERE id = ?";
        const [user] = await conn.query(sql,id);
        if(user.length > 0){
            if(user[0].pw == await createHashedPassword(pw)){
                return {
                    status : 200,
                    token : jwt.sign({id:user[0].id},jwtConfig.sercretKey),
                    name : user[0].name
                }
            }
        }
        return {status : 401};
    } catch (e) {
        console.log(e);
        if(conn == null){
            return {status : 500};
        }
        conn.release();
        return {status : 500};
    }finally{
        if(conn != null){
            conn.release();
        }
    }
}
module.exports = LoginService;