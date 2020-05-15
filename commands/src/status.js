const Discord = require("discord.js");
const client = require("../../index");

function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " day" : " days") + " ago";
}

module.exports.use = async (message, args, index) => {
  let verifLevels = ["Ninguno", "Bajo", "Medio", "Alto"];
  let region = {
    colombia: "Colombia",
    brazil: "Brazil",
    "eu-central": "Central Europe",
    singapore: "Singapore",
    "us-central": "U.S. Central",
    sydney: "Sydney",
    "us-east": "U.S. East",
    "us-south": "U.S. South",
    "us-west": "U.S. West",
    "eu-west": "Western Europe",
    "vip-us-east": "VIP U.S. East",
    london: "London",
    amsterdam: "Amsterdam",
    hongkong: "Hong Kong",
  };

  var emojis;
  if (message.guild.emojis.cache.size === 0) {
    emojis = "Ningunos";
  } else {
    emojis = message.guild.emojis.cache.size;
  }

  const embed = new Discord.MessageEmbed()
    .setAuthor(
      message.guild.name,
      message.guild.iconURL()
        ? message.guild.iconURL()
        : client.user.displayAvatarURL()
    )
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()
    .addField(
      "Creado",
      `${message.guild.createdAt.toString().substr(0, 15)},\n(${checkDays(
        message.guild.createdAt
      )})`,
      true
    )
    .addField("ID", message.guild.id, true)
    .addField(
      "STAFF",
      `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
      true
    )
    .addField("Pais", region[message.guild.region], true)
    .addField("Usuarios", message.guild.memberCount, true)
    .addField(
      "Miembros",
      message.guild.members.cache.filter((m) => !m.user.bot).size,
      true
    )
    .addField(
      "Bots",
      message.guild.members.cache.filter((m) => m.user.bot).size,
      true
    )
    .addField("Tiempo AFK", message.guild.afkTimeout / 60 + " minutos", true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .addField("Canales", message.guild.channels.cache.size, true)
    .addField("Emojis", `${emojis}/100`, true)
    .addField("Nivel de verificacion", message.guild.verificationLevel, true)
    .setColor(Math.floor(Math.random() * 16777215));
  message.channel.send({ embed });
};
