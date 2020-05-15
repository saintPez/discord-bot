const Discord = require('discord.js');
const client = require('../../index');
const utils = require('../../utils/index');
const { name, prefix, lenguage } = require('../../config.json');

module.exports.use = async (message, args, index) => {
    const user = message.mentions.members.first() || message.member;
    const embed = new Discord.MessageEmbed();
    embed.setAuthor(client.user.username, client.user.avatarURL);
    embed.setThumbnail(client.user.avatarURL);
    embed.setColor(`${lenguage.status[user.presence.status].color}`);
    embed.setTitle(`${lenguage.avatar_info}: @${user.user.username}`);
    embed.setImage(user.user.displayAvatarURL());
    embed.setFooter(name);
    message.channel.send(embed);
    if (!args[0]) {
        message.channel.send(`${lenguage.syntax}: ` + '`' + `${prefix}${lenguage.commands[index].use} (@${lenguage.user})` + '`');
        utils.deleteBotMessage(message.channel, 1);
    }
    return true;
}