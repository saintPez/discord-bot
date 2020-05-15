const Discord = require("discord.js");
const client = require("../../index");
const utils = require("../../utils/index");
const { lenguage } = require("../../config.json");

module.exports.use = async (message, args) => {
  let target =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!target)
    return message.channel.send(`${lenguage.error}: Usuario no encontrado.`);

  let reason = args.slice(1).join(" ");
  if (!reason)
    return message.channel.send(
      `${lenguage.error}: Por favor digita una razon para reportar`
    );

  let sChannel = message.guild.channels.cache.find((x) => x.name === "reports");

  message.channel
    .send("Tu reporte ha sido enviado a miembros del staff.")
    .then((m) => m.delete(15000));
  sChannel
    .send(
      `**${target.user.tag}** ha sido reportado por **${message.author.tag}**, razon: **${reason}**.`
    )
    .then(async (msg) => {
      await msg.react(":white_check_mark:");
      await msg.react(":x:");
    });
};
