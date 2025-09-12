const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SMshnZSI#ZJuFUoEMt6RdlPc51D3YE3AXXMwCgJeFKzMWaNbRq_A", // ඔයාගෙ session id එක
MONGODB: process.env.MONGODB || "mongodb://mongo:sjjkkd",  //ඔයාගෙ mongoDb url එක
};
 
