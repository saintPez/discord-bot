const Discord = require('discord.js');
const { lenguage, random_imgs, random_text } = require('../../config.json');

module.exports.use = async (message) => {
  const embed = new Discord.MessageEmbed();
  embed.addField(`${lenguage.random_text}`, `${random_text[Math.floor(Math.random() * random_text.length)]}`);
  embed.setThumbnail(random_imgs[Math.floor(Math.random() * random_imgs.length)]);
  message.channel.send(embed);
  return true;
}