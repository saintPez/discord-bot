const Discord = require('discord.js');
const client = require('../../index');
const { color, lenguage } = require('../../config.json');

function checkDays(date) {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
};

module.exports.use = async (message, args, index) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
        .setThumbnail(message.guild.iconURL())
        .setTimestamp()
        .addField(`${lenguage.created}`, `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(message.guild.createdAt)})`, true)
        .addField(`${lenguage.id}`, message.guild.id, true)
        .addField(`${lenguage.owner}`, `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField(`${lenguage.country}`, lenguage.region[message.guild.region], true)
        .addField(`${lenguage.users}`, message.guild.memberCount, true)
        .addField(`${lenguage.members}`, message.guild.members.cache.filter(m => !m.user.bot).size, true)
        .addField(`${lenguage.bots}`, message.guild.members.cache.filter(m => m.user.bot).size, true)
        .addField(`${lenguage.afk_time}`, message.guild.afkTimeout / 60 + ' minutos', true)
        .addField(`${lenguage.roles}`, message.guild.roles.cache.size, true)
        .addField(`${lenguage.channels}`, message.guild.channels.cache.size, true)
        .addField(`${lenguage.emojis}`, `${message.guild.emojis.cache.size}/100`, true)
        .addField(`${lenguage.verification_level.name}`, lenguage.verification_level[message.guild.verificationLevel], true)
        .setColor(`${color}`)
    message.channel.send({ embed });
}
