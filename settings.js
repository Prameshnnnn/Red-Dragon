//════════════(00)═══════════════════════════════════════//
//
//                              K.PRABHASHA
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════(00)════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is 💌🅟🅡🅐🅜🅔🅢🅗 🅝🅘🅛🅐🅚🅢🅗🅐🅝💌🔥
My Creator is 🅟🅡🅐🅜🅔🅢🅗😎` //Costomize Alive Message (හායි
𝙞 𝙖𝙢 𝙖 𝙗𝙤𝙩🤖 ⃢⃪🤖⃡⃝🤖 
ⓒⓡⓔⓐⓣⓔ ⓑⓨ
🄿⃡⃢🅁⃪🄰🄼⃪⃩🄴🅂⃭⃰🄷 🄽⃜⃢🄸🄻⃜⃗🄰⃘🄺⃗🅂⃕🄷🄰⃗🄽⃔⇶
༺═─⃝─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃟─⃝─═༻
❤️⃝😒ꦿ࿔😮⃝৫⃟➤᭄᭄̊̊̊̊࿓࿔🦋⃝❉⃟࿔ꦿ😮⃝৫⃟➤᭄᭄̊̊̊̊࿓
𝙗𝙤𝙩 𝙬𝙤𝙧𝙠 𝙩𝙞𝙢𝙚➠උදේ ඉදන් රෑ වෙනකන්
╭━━━━━━━╮
┃       ● ══    ┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃███████┃
┃         ○        ┃
╰━━━━━━━╯
╔═════ೋೋ═════╗
http://wa.me/+94704472592?text=_H͟i͟_ප්‍රමේෂ් _⃝────★᭄_✮͚_💚─⃤̸᭄̂̇✾̋_❤⃝⃕꧁⃝⃘⃕⃔༄͓̽⟧_█̷️™̶➳̶̶₂̶̶₀̶̶₂̶̶2➳̶̶̶᭄
*╚═══❖•ೋ° °ೋ•❖═══╝*
 ♡ _♫__♡
║║╔║║╔╗ ♫
╠╣╠║║║║
║║╚╚╚╚╝ ♫
༒❤️⃢⃙⃭⃛❤️⃪⃬❤️⃪⃜⃠❤️⃞⃪⃯⃩❤️⃪⃝❤️⃘⃫⃫⃤❤️⃔⃝⃰⃜❤️⃧⃞❤️⃯⃝⃙❤️⃘⃕⃜❤️༒
╔══════════❀⦂⦁◦►
*ඔබගේ යාලුවන් ඔබට තාමත් ඇත ᭄*
*𝗜'𝗠 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗜𝗡𝗚 𝗬𝗢𝗨𝗥 𝗦𝗢𝗡𝗚🎧⃟⃟̈̇̍̍̇̈̇̍̍̇̈̐🎵⃝̥̥̥➤*
╠══════════════════❈⦂◦►

*00:00 ●━━━━━━━━━━━━ 03:30* 
    *⇆        ◁ㅤㅤ❚❚ㅤㅤ▷          ↻*

╠══════════❀⦂⦁◦►
*꧁🧸̶͟͞⃞🆀🆄🅴🅴🅽🌈🅂🄾🄾🅃🄸🄺🄺🄸⃟🎀̶͟͞꧂*
╚══════════❀⦂⦁◦► )

global.owner = ['+94704472592'] //Owner number in aive msg
global.premium = ['+94704472592'] //Owner Number info
global.ownernomer = '+94704472592' //Owner Number <<<

global.ownername = '✈️𝙥𝙧𝙖𝙢𝙚𝙨𝙝✈️' //Owner Name
global.botname = ' ✈️𝙥𝙧𝙖𝙢𝙚𝙨𝙝✈️' //Bot Name

global.button = '🤭මේක ටච් කරන්න📍' //Costomize A Button Name In Alive Message
global.btnurl = '🙂🔥කරන්න කියන හැම දෙයක්ම කරන්න එපා බන්😅😅?😑' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '✈️𝙥𝙧𝙖𝙢𝙚𝙨𝙝✈️' //Bot Pacage Name
global.author = '😎𝙥𝙧𝙖𝙢𝙚𝙨𝙝❯❯' //Author Name
global.prefa = ['','!','.','✈️','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor In Menu!


global.ig = 'https://github.com/prabhasha2006' //Github Account!
global.footer = '🅟🅡🅐🅜🅔🅢🅗❤️✈️.' // DO NOT CHANGE!

global.mess = { // Error Mesages
    success: 'හරි ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
