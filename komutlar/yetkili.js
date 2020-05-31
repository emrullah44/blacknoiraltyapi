const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Ihsan TR Komutlar**]`)
  .addField(`**Moderasyon-Komutları**`,`:white_small_square: \`-rolver\` = Kullanıcılar bu komutla rol verebilirsiniz. \n:white_small_square: \`-otorol\` = Sunucu giriş yapanlara belirlediğiniz rolü verir. \n:white_small_square: \`-sayaç\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`-ban\` = İstediğiniz kişiyi sunucudan engeller. \n:white_small_square: \`-unban\` = Engellediğiniz kişinin engelini kaldırır .\n:white_small_square: \`-banlist\` = Engellenmiş kişileri gösterir.\n:white_small_square: \`-küfür-engel [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \`-reklam-engelleme \` = Reklam Paylaşmasını Engeller.  \n:white_small_square: \`-oylama\` = Oylama başlatırsınız. \n:white_small_square: \`-slowmode\` = Yavaş Modu Açar. \n:white_small_square: \`-sil\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`-mute\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz.\n:white_small_square: \`-dc\` = Discord daveti oluşturur.\n:white_small_square: \`-sunucubilgi\` = Sunucu bilgisine ulaşırsınız.  `)
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
  name: 'yetkili',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//IhsanTR Botu