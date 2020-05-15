const Discord = require("discord.js");
const client = require("../../index");
const { lenguage } = require("../../config.json");

module.exports.use = async (message, args, index) => {
    const user = message.mentions.users.first();
    const embed = new Discord.MessageEmbed()
    /*embed.setColor("#0099ff")
    embed.setAuthor("Pene")
    embed.setImage(`${message.guild.iconURL()}`)
    embed.setDescription(`Bienvenido a ${message.guild.name}, visita **!help** para mas información.`)
    embed.setImage(`${message.author.avatarURL()}`)
    message.channel.send(embed);*/
    .setTitle(`${message.guild.name}`)
    .setAuthor(message.author.username, client.user.displayAvatarURL())
    .setColor(0x00AE86)
    .setDescription("Puedes usar el comando **!help** para encontrar mas informacion sobre el servidor y encontrar comandos interesantes.")
    .setThumbnail(message.author.displayAvatarURL())
    message.channel.send(embed);
};
