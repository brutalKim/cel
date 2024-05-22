const pool = require("../../DB/DBpoolConnection");

const CreateRecordService = async(userId,data)=>{
    let conn = null;
    try {
        conn = await pool.getConnection();
        const sql = "SELECT id FROM users WHERE id = ?";
        const [user] = await conn.query(sql,userId);
        if(user.length >0){
            const sql = "INSERT INTO records(id,description,money,date) VALUES(?,?,?,?)";
            const params = [userId,data.description,data.money,new Date()];
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
module.exports = CreateRecordService;