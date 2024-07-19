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

  menu: process.env.MENU || "@menu", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "ＧＥＮＥＲＴＥＤ ＢＹ ＷＡＳＩ 🇵🇰",
 
  author : process.env.PACK_AUTHER|| "ＩＴＸ",
  packname: process.env.PACK_NAME || "ＷＡＳＩ♥️",
  botname : process.env.BOT_NAME  || "lili md",
  ownername:process.env.OWNER_NAME|| "jona 𝗜",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_49_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgxLFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICA3MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc3LFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSdXBtMDd1L3NtRWVuU3RwdlZGVWZYZFVFaTl4TzJmRGtQSklBdXArWW5vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrbEJUV2dmdVFRS3FnaUc0Ql9UR1NRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRjMjNmMjk5LTQ3YjQtNDAxZi1iZGE4LTc5MzQ5ODc5Y2MwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDI0NSxcbiAgICAgIDIzMSxcbiAgICAgIDIzNCxcbiAgICAgIDk3LFxuICAgICAgODksXG4gICAgICAxNTMsXG4gICAgICAyNDEsXG4gICAgICAxMzgsXG4gICAgICA1MixcbiAgICAgIDk1LFxuICAgICAgOCxcbiAgICAgIDEwMixcbiAgICAgIDE0NSxcbiAgICAgIDE2MCxcbiAgICAgIDE2MyxcbiAgICAgIDE0NixcbiAgICAgIDIwOSxcbiAgICAgIDUxLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgODcsXG4gICAgICAxMSxcbiAgICAgIDIyOCxcbiAgICAgIDg4LFxuICAgICAgMTk0LFxuICAgICAgMjM4LFxuICAgICAgMTIzLFxuICAgICAgMjAxLFxuICAgICAgMTU5LFxuICAgICAgMjM1LFxuICAgICAgODAsXG4gICAgICAyNDksXG4gICAgICAyMzUsXG4gICAgICA1MCxcbiAgICAgIDk0LFxuICAgICAgMTk1LFxuICAgICAgMjQ0LFxuICAgICAgNDEsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNQUZGRUtCSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU3NjU4MDk3MTg6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLjg6vjgrfjg5XjgqHjg7xcIixcbiAgICBcImxpZFwiOiBcIjExNjUwNTY1MjAxMTI2MDo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdjdodmdDRUwySjZiUUdHQmNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInU2K3J6cUExcE1OdVNHb29XR3A1ZGYzdHBaNlJMNU1UR3AvMnFoOWFjbVU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiampqNS9jSk5VWmZZNFJGaGhiZ2FRcFFOM21kTGJyTnU4Nit6dTFscVpFT0owalIxKy9BY2FYNERhTTBoeEg1M1gvUXoxV1VtRU5QampZZjd6ZlRTQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTDZMK3RPMTJLQ3pjMW5YdEErTHM1eTlWMVZoTkM1Zm41R0s3SFRUWVVERjhCcVpOOVkyTlpTaWFIa3gwbVpxUlA3RVVmcDBPbk9mL3owVFkrRm53aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU3NjU4MDk3MTg6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzODYxNzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIODlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg4OS5qc29uIjogIntcImtleURhdGFcIjpcIm54dHhUK0RERnhEOThZbFFjNDJpeVlwWlBTMERxdFdwUVFFS3dzYkZBTnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Nzg4NjQzMjUyLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
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
 
