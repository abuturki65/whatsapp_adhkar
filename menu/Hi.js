const returnMenu = require('../lib/returnMenu.js');
const Error = require('../lib/error.js');
const fs = require('fs-extra');


module.exports = async function Hi(client, body, from, pushname, id) {

  if (body === 'hi' || body === 'Hi' || body === 'خدمة' || body === 'خدمه' || body === '#') {

    returnMenu(from, 0);



    let getallGroups = await client.groupFetchAllParticipating()
    let number_groups = Object.keys(getallGroups).length;
    let new_user = fs.readJsonSync('./db/new_user.json')
    let number_user = new_user.length;
    let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
    mesg += 'من فضلك قم بكتابة *رقم* الخدمة ✉️ \n\n\n'
    mesg += '1- قائمة القرآن الكريم 📖 \n'
    mesg += '2- قائمة الأذكار 📿 \n'
    mesg += '3- فيديوهات قرآن عشوائية 🎥 \n'
    mesg += '4- صورة عشوائية 🖼️ \n'
    mesg += '5- قائمة الملصقات 🪧 \n'
    mesg += '6- محاضرات و توعية 🌾 \n'
    mesg += '7- قائمة القروبات ⚜️ \n'
    mesg += '8- بطاقات القرآن 🎴 \n'
    mesg += '9- حصن المسلم 🏰 \n\n\n\n'
    mesg += 'إحصائيات البوت \n'
    mesg += `عدد القروبات : ${number_groups}\n`
    mesg += `عدد جهات الإتصال : ${number_user}\n\n`
    mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'

    await client.sendMessage(from, { text: mesg }, { quoted: id }).catch((error) => Error(error));

  }
}
