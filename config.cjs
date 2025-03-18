// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "JOEL~XMD~91GfSEJj",
  PREFIX: process.env.PREFIX || '.',
//let's add menu captions by lord joel
   BOT_NAME: process.env.BOT_NAME || "𝙎𝞓𝞣𝞗⁩ - 𝙎𝞓𝙉",
   BOT: process.env.BOT || "hello 👋",
  // lets add new cmd by lord joel
  NEW_CMD: process.env.NEW_CMD || "ᴀᴅᴅᴠᴀʀ\n\n│ sᴜᴅᴏ",
  CAPTION: process.env.CAPTION|| "𝙎𝞓𝞣𝞗⁩ - 𝙎𝞓𝙉",
// don't use my codes without a permission 🙏
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'false' : false,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS !== undefined ? process.env.AUTOLIKE_STATUS === 'false' : false,
  /*anti left by joel tech*/
  ANTI_LEFT: process.env.ANTI_LEFT !== undefined ? process.env.ANTI_LEFT === 'true' : true,
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '💚', // For liking status updates(stories)
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'false' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status Viewed by joel-Md',
  AUTO_STICKER: process.env.AUTO_STICKER !== undefined ? process.env.AUTO_STICKER === 'true' : true,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'false' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'false' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  /*joel james tech added anti delete cmd*/
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'false' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "𝙎𝞓𝞣𝞗⁩ - 𝙎𝞓𝙉",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "917870107458",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "919572690797",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'false' : false, 
};


module.exports = config;

