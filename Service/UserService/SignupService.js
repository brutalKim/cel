const pool = require("../../DB/DBpoolConnection");
const createHashedPassword = require("../../DB/Crypto");

const SignupService = async(id,pw,name,tel)=>{
    let conn = null;
    try {
        conn = await pool.getConnection();
        const sql = "SELECT id FROM users WHERE id = ?";
        const [rows] = await conn.query(sql,id);
        if(rows.length <1){
            const sql = "INSERT INTO users VALUES (?,?,?,?)";
            const params = [id,createHashedPassword(pw),name,tel];
            await conn.query(sql,params);
            conn.release();
            return 200;
        }
        return 408;
    } catch (e) {
        console.log(e);
        conn.release();
        return 500;
    }finally{
        conn.release();
    }
}
module.exports = SignupService;