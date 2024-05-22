const pool = require("../../DB/DBpoolConnection");

const DeleteRecordService = async(id,no)=>{
    let conn = null;
    try {
        conn = await pool.getConnection();
        const sql = "SELECT id FROM users WHERE id = ?";
        const [user] = await conn.query(sql,id);
        if(user.length>0){
            const sql = "DELETE FROM records WHERE id = ? AND no = ?";
            const params = [id,no];
            await conn.query(sql,params);
            return 200;
        }
        return 401;
    } catch (e) {
        console.log(e);
        return 500;

    }finally{
        conn.release();
    }
}
module.exports = DeleteRecordService;