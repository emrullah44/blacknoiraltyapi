const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Ihsan TR Komutlar**]`)
  .addField(`**Yeni-Komutlar**`,`\`-sunucu-kur\` = Otomatik Sunucu Kurar.\n \`-servericon\` = Komutu gerçekleştirdiğiniz sunucunun iconu'nu gösterir. \n \`-öneri\`= Bot'a dağir önerilerinizi bu komutlar yetkililere gönderebilirsiniz. \n \`-davet-takip\` = Sunucuda Kimin Kaç Davet Yaptığını Görürsünüz.\n \`-resimliyazı\` = Resimli Yazı Atar.
`)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yeni-komutlar',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//IhsanTR Botu