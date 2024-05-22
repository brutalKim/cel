const crypto = require("crypto");

const createHashedPassword = (pw)=>{
    const hashedPw = crypto.createHash("sha512").update(pw).digest("base64");
    return hashedPw;
}

module.exports = createHashedPassword;