const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348173698061";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_51_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAxODIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDExNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInUybE9hU3czcC9WcXZYRTF3MytqR1AycStDa1dYNzNhWllvM0M2KzBpTFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklWcFpnZTZOUXJ1UElLNFN2T1pubUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWVjNmFlY2MtZTY3NC00ZGU3LWJkMDMtZThiMTBiNDIzYTU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDIyNCxcbiAgICAgIDMwLFxuICAgICAgMTc4LFxuICAgICAgMTE5LFxuICAgICAgNzgsXG4gICAgICAyMjgsXG4gICAgICAyMzAsXG4gICAgICAxMjgsXG4gICAgICA1MixcbiAgICAgIDIxMCxcbiAgICAgIDEzOSxcbiAgICAgIDk2LFxuICAgICAgMTIxLFxuICAgICAgMjEwLFxuICAgICAgMjI1LFxuICAgICAgMTg4LFxuICAgICAgMTcwLFxuICAgICAgNTAsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDMsXG4gICAgICAxMDMsXG4gICAgICAxODQsXG4gICAgICA0MyxcbiAgICAgIDEwNixcbiAgICAgIDEzLFxuICAgICAgODMsXG4gICAgICAxNDYsXG4gICAgICA1MyxcbiAgICAgIDE3MCxcbiAgICAgIDYwLFxuICAgICAgMTUsXG4gICAgICAzOSxcbiAgICAgIDE3NyxcbiAgICAgIDIyMixcbiAgICAgIDEzOSxcbiAgICAgIDMyLFxuICAgICAgMCxcbiAgICAgIDIwMyxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1YTEdMUDFOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTczNjk4MDYxOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkyMjIxODM5ODAyNDM2OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmY5a3V3RkVJT3J2clVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkY3h6RktFZUZhT1B1MFhXNkM3aGxXVm5naDhGVlFtT1B4OEtCU1NYRGhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVHRlU0T3ZHQ0VHZ3grRE9aenQrQTdvQ25aVGVyUWF1NFVQdkNTa05EVDUxYytVWGV6cEQyMFM0WUNkMTVzdWxacDdSVU9VK2o3ZE5mK1B3UWNjRkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjViaFQxQTVUWWY4UFJCOHREMUpiQlJyclVuMGhhVVgyd0N3ZkpkWU0zamt4ZVI0VHVnY0twR2c4bVVBbFpqRzIwZGQvU3hjTDdzaE55L1FZZVY5M2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNzM2OTgwNjE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzgzMTExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTisxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOKzEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtMWpoOFM3cWNnU0Nla3BvWS93M0Nld2NveGJaY0xqbDZwR0x0cE1wamNVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Njg5ODA2OTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjc4MzExNjk0N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
