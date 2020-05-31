const Discord = require('discord.js');

exports.run = async (client, message, params) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = client.channels.find('id', '715891889794056244')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
  .setTitle("»  İhsan TR Bot | Canlı Destek")
  .setDescription("**Canlı Desteği kullandğın için teşekkür ederiz, Seninle ekibim ilgilenicektir lütfen bekle!**")
  .setDescription("**30 Saniye İinde Geri Dönilmezse Lütfen İletişime Geçin** **\nCanlı Destek Ekibimiz**  》 <@471728958837358593>")
  .setColor("#31ff00")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['canlıdestek'],
  permLevel: 0
};

exports.help = {
  name: 'canlı-destek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: '-canlı-destek'
};
//IhsanTR Botu