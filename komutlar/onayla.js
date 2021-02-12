const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let yetkiliROL = ayarlar.yetkiliROL;
  if (!message.member.roles.has(yetkiliROL)) return;
  let yetkili = message.author;
  let sahip = message.guild.members.get(args[0]);
  let botisim = message.guild.members.get(args[1]);
  let botisim2 = args[1];
  let prefix = args[2];
  let isim = client.users.get(args[1]).username;
  let log = ayarlar.log2;
  let rol = ayarlar.developerROL;
  let b = ayarlar.botROL;
  let m = ayarlar.memeber;


  message.delete();
  sahip.addRole(rol);
  botisim.addRole(b);
  botisim.removeRole(m);
  let embed2 = new Discord.RichEmbed()
    .setColor("#5fbf00")
    .setDescription(
      ` <a:tik4:756946179530424541> ${sahip} **adlı kişinin** ${botisim} **adlı botu onaylandı.** \n\n  🔏 **Onaylayan yetkili =** ${yetkili} `
    );
  client.channels.get(log).send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onayla", "onayla"],
  permLevel: 0
};

exports.help = {
  name: "onayla",
  description: "Sunucuya eklenen botu onaylar.",
  usage: "botonayla <bot ismi>"
};
