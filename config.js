//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347053192517";
global.owner = process.env.OWNER_NUMBER || "2349164718113";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5HTG5BamJMYlp1NnpuazJMUmo2eEgxcHY4UzdTTGJ6SGVkRFJyNm1uQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFN5MThmbXQxTTFYYmErdS9rWDlGaW9BaHNGQnhEM0pxQW1wUmRRcUx4OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSW9Wc0F6cTNMWE13UVN0eTJQSk1HZUIvNzg3eGtHNUxvMVhpbXNJbVZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2d1FiRmtUMjZRa0dOZW1EUk9BcmFycmNManYzM0xSWW5ZZHg4Um1Cd0V3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIS293b0lubDcvNDdBYjZNRiszbXQ5eDh2YzJycG96WlB2UmRLNk1LWG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY1YXFuUVNWR25MTzU1aXFkVUtwd3pneVptQ3d1djFPY1dCeVd3QU1OSGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxDVFdhUUhnRjlXZDBpRTY0dWxnWlNnUEtWL3RidjhZeGFEdmNpcFdsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDlaNFN4NEJRNE5WZE80cjByT3NPd0x2NG01V2xvSjBONkg0Z0t1bUNVQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRyQnFkSmNyeVlPS2hHNE5ncUZnQ1lUdmJjd2E5T3NEK0QwTmMwNDNjNVR6TDlCTjVmNUVubXF4bFZaYTMxbTRsbHF3V3NBZFFIYzBKaWNtRVhWZ2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJTZ2d1UFB2MithSWFDWlkvVTFLelVEc1pDUUtnV3QwdFprVE85Q3pGREE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3aXpSOFZzTlNvU1NoclpURXdVVmtRIiwicGhvbmVJZCI6ImMxYjI4ZWE5LTRkYmQtNGExZS05OGZhLTZjYTNhZDM1YjExYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOMFNYOXd0Z0pZRFowT1BoSzFRWnpWTlpMUnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVRnRW1pN0xKSEEwdDhXUFdhTGtUVTBnejVNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilo0NUM0TVJaIiwibWUiOnsiaWQiOiIyMzQ5MTY0NzE4MTEzOjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNoaW5lIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMU2wzL1VHRU1PdW43a0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRN25zOHNqaGdHWk9hcmZZQ1Ztdk93dnZYQTdRR2swb09wV3psZEN4ZGpRPSIsImFjY291bnRTaWduYXR1cmUiOiJEc2o1M3kzanQxbmMyS1ZPNXlMUHBxZnNrQVVDNzEwdUp6eVJJdTRCdHlRUVBaNHFjL0xWaUdac3htdWZmSXUyenJYbEt3eUp2a1JaYis5M0VHSGhEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQmdJYTJnekVPNStleWIxNU9lc3dRQzdqQ3JJclhyOHhiYWdtYmhhcVF1M0ZRVG5OdlFtaGpURDZ1NkVxallCbHlpbm1zSExNQzBMcVlCWXpmTWRBakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY0NzE4MTEzOjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVPNTdQTEk0WUJtVG1xMzJBbFpyenNMNzF3TzBCcE5LRHFWczVYUXNYWTAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA2NjQyNzZ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`☯︎shi ne✌︎💨™`",
  author: process.env.PACK_AUTHER || "☯︎shi ne✌︎💨",
  packname: process.env.PACK_NAME || "☯︎shi ne✌︎💨",
  botname: process.env.BOT_NAME || "☯︎shi ne✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎shi ne✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎shi ne✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
