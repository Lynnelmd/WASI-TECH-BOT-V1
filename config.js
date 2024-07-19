const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || "postgresql://zokou_database_sn0g_user:J0tTe0SkZ5SZE2dgczlfJClRtonR0OGs@dpg-cqcfjq08fa8c73cp5ffg-a.oregon-postgres.render.com/zokou_database_sn0g"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Itxxwasi/WASI-TECH-BOT-V1";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/733b2d3b5f1d1e1aeec0f.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "25765809718";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOMEWELCOM || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923192173398,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "ＧＥＮＥＲＴＥＤ ＢＹ ＷＡＳＩ 🇵🇰",
 
  author : process.env.PACK_AUTHER|| "ＩＴＸ",
  packname: process.env.PACK_NAME || "ＷＡＳＩ♥️",
  botname : process.env.BOT_NAME  || "lili md",
  ownername:process.env.OWNER_NAME|| "jona 𝗜",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_28_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICA5MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDg3LFxuICAgICAgICA2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdKOGkzcHRHWTlSRmxubnk2WHJTQUR1U244dDBCK2JkdllVK2hienZ2SDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJ3T3kya2FXU1BlNXpsekVkOGNHa0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTMyMjllZTgtODhkMi00MjQyLWEyMmQtMGMwMzQ2ZDlkYWJlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgMTAxLFxuICAgICAgMTU4LFxuICAgICAgNTcsXG4gICAgICAxNjksXG4gICAgICA4NyxcbiAgICAgIDExMixcbiAgICAgIDE0OSxcbiAgICAgIDE1NyxcbiAgICAgIDIwNixcbiAgICAgIDE3MyxcbiAgICAgIDI0OSxcbiAgICAgIDIxNCxcbiAgICAgIDExOSxcbiAgICAgIDI0LFxuICAgICAgMTM5LFxuICAgICAgMixcbiAgICAgIDEwNyxcbiAgICAgIDE5OCxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDI4LFxuICAgICAgMzIsXG4gICAgICAyMzgsXG4gICAgICA4NCxcbiAgICAgIDE1NyxcbiAgICAgIDE0NCxcbiAgICAgIDIyMSxcbiAgICAgIDgyLFxuICAgICAgMjM5LFxuICAgICAgNDUsXG4gICAgICAyMTksXG4gICAgICAyNDYsXG4gICAgICAxMTIsXG4gICAgICAyMDgsXG4gICAgICA4MixcbiAgICAgIDIwMSxcbiAgICAgIDAsXG4gICAgICAxNDUsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUV1I3RzQxNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU3NjU4MDk3MTg6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLjg6vjgrfjg5XjgqHjg7xcIixcbiAgICBcImxpZFwiOiBcIjExNjUwNTY1MjAxMTI2MDo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdjdodmdDRUxiLzZMUUdHQllnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInU2K3J6cUExcE1OdVNHb29XR3A1ZGYzdHBaNlJMNU1UR3AvMnFoOWFjbVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTTVYTnl2MFBSRksvWnM1bVZxTzVzcGZqcDBVRjRLVTQwR1ZLcXNVc3A2NmsrdGxZelJqZm9KZkQ3TmNaNG8vSmF6SnZJT0FiSzJNS1dqOWhrUUVCQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWTliblFFaVBEZlVDR3VTR2FFNVpuRGNzdlA1VU9qazcwNVN6T1dwYmZuTzJ6RnowQXBtVUNjMlBhL3MwK3FMQjY1RWlrOXFsL3ZXbW94OTY0blEvQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU3NjU4MDk3MTg6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzODQ4OTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIODlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg4OS5qc29uIjogIntcImtleURhdGFcIjpcIm54dHhUK0RERnhEOThZbFFjNDJpeVlwWlBTMERxdFdwUVFFS3dzYkZBTnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzg4NjQzMjUyLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "RybcWhfzZJ7Wd46dgGE21kLt",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "25",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "5c804a3fc8fb6ca21eeaecacf9935870",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
