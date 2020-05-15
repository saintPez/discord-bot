const Discord = require("discord.js");
const client = new Discord.Client();
const { name, token, prefix, activity, lenguage, channels } = require("./config.json");
const commands = require('./commands/index');

client.once("ready", () => {
    console.log(name + ' ready!');
    client.user.setActivity(activity.name, { type: activity.options });
});

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(`${channels.welcome.id}`).send(`**${member.user.username}**, ${lenguage.welcome_text}.`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(`${channels.bye.id}`).send(`**${member.user.username}**, ${lenguage.bye_text}`);
})

client.on('message', async message => {

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  commands.executeCommand(message, command, args);
});

client.login(token);
module.exports = client;
