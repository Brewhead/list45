const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
  let botID = args[0];
  let prefix = args[1];
  let basvuru = ayarlar.basvurulog;
  let eklekanal = ayarlar.eklekanal;
  let log = ayarlar.log;

  if (message.channel.id !== eklekanal)
    return message.channel
      .send(`Bu komutu sadece <#${eklekanal}> kanalında kullanabilirsin.`)
      .then(msg => msg.delete(10000));
  if (message.channel.id == eklekanal) {
    if (!botID)
      return message.channel
        .send(`:no_entry: Botunun ID'sini yazmalısın.`)
        .then(msg => msg.delete(10000));
    if (!prefix)
      return message.channel
        .send(`:no_entry: Botunun prefixini yazmalısın.`)
        .then(msg => msg.delete(10000));
    message.delete();
    const embed = new Discord.RichEmbed()
      .setColor("BLUE")
     .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botID}&scope=bot&permissions=0)`, true)
     .setTitle("Bot Ekletme")
     .addField("Bot Sahibi", message.author.id)
     .addField("Bot ID", botID)
     .addField("Bot Prefix", prefix);
    client.channels.get(basvuru).send(embed).then(msg => msg.react("✅") & msg.react("⛔"));
   client.channels.get(log).send(`<a:saok:739048942553137172> ${message.author} ** Adlı Kullanıcının ${botID} Adlı Botu Sıraya Ekledi. <@&769624539616378880> Yetkilisinin Botu Onaylanması Bekleniyor. <a:loading:744225097572941916> \n <a:saok:739048942553137172>**  **Prefix =** {  ${prefix}  }`);
   

    message.channel.send(`<a:tik1:739048934374113330> **|** **Bot ekleme isteğiniz alındı.**`).then(msg => msg.delete(3000));
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botekle"],
  permLevel: 0
};

exports.help = {
  name: "botekle",
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: "botekle <botid> <prefix>"
};
