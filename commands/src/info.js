const Discord = require('discord.js');
const utils = require('../../utils/index');
const { prefix, lenguage } = require('../../config.json');

module.exports.use = async (message, args, index) => {
    await message.channel.bulkDelete(1);
    const user = message.mentions.members.first() || message.member;
    const embed = new Discord.MessageEmbed();
    embed.setColor(`${lenguage.status[user.presence.status].color}`);
    embed.setDescription(`${lenguage.user_information}`, `${user.user.username}`);
    embed.addField(`${lenguage.name}`, `${user.user.tag}`);
    embed.addField(`${lenguage.id}`, `${user.id}`);
    embed.addField(`${lenguage.status.name}`, `${lenguage.status[user.presence.status].name}`);
    message.channel.send(embed);
    if (!args[0]) {
        message.channel.send(`${lenguage.syntax}: ` + '`' + `${prefix}${lenguage.commands[index].use} (@${lenguage.user})` + '`');
        utils.deleteBotMessage(message.channel, 1);
    }
    return true;
}