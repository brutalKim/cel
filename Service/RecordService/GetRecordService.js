const pool = require("../../DB/DBpoolConnection");

const GetRecord = async(decodedUserId)=>{
    let conn = null;
    try {
        conn = await pool.getConnection();
        const sql = "SELECT * FROM records WHERE id = ?";
        const [rows] = await conn.query(sql,decodedUserId);
        return rows;
    } catch (e) {
        console.log(e);
        return 500;
    }finally{
        conn.release();
    }
}
module.exports = GetRecord;