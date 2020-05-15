const Discord = require("discord.js");
const client = require("../../index");
const utils = require("../../utils/index");
const { lenguage } = require("../../config.json");

module.exports.use = async (message, args) => {
  if (!args[0])
    return message.channel.send(`${lenguage.error}: Debes especificar a la persona que deseas banear`);
  const user = message.mentions.members.first() 
  const author = message.member;
  if (!user) return message.channel.send(`${lenguage.error}: Usuario no encontrado`);
  let reason = message.content.split(`!ban ${user.id}`);
  if (!args[1]) return message.channel.send(`${lenguage.error}: Por favor especifica la razon`);
  if (!reason) return message.channel.send(`${lenguage.error}: Por favor especifica la razon`);
  if (!user.kickable)
    return message.channel.send(`${lenguage.error}: No puedes hacer esto con este usuario`);
  if (!message.member.permissions.has("BAN_MEMBERS"))
    return message.channel.send(`${lenguage.error}: No tienes permisos`);
  user.ban(reason);
  const embed = new Discord.MessageEmbed()
    .setDescription(`Has baneado a **${user.user.tag}** de este servidor Razon: ${reason}.`)
    .setTitle(`${message.guild.name}`)
    .setAuthor(message.author.username, author.user.displayAvatarURL())
    .setColor(0x00AE86)
    .setDescription(`Has baneado a **${user.user.tag}**`)
    .setThumbnail(user.user.displayAvatarURL())
    message.channel.send(embed);
};
