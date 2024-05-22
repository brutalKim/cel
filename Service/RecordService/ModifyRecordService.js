const pool =require("../../DB/DBpoolConnection");

const ModifyRecordService = async(id,body)=>{
    let conn = null;
    try {
        conn = await pool.getConnection();
        const sql = "SELECT id FROM users WHERE id = ?";
        const [user] = await conn.query(sql,id);
        if(user.length>0){
            const sql = "UPDATE records SET description = ? , money = ? WHERE no = ? AND id = ?";
            const params = [body.description,body.money,body.no,id];
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
module.exports = ModifyRecordService;