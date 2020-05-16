import { config } from 'dotenv';
import { name, activity, commands, lenguage, channels } from './config.json';
config();

import Discord from 'discord.js';
const client = new Discord.Client();

const utils = require('./utils/index');

client.once("ready", () => {
    console.log(name + ' ready!');
    client.user?.setActivity(activity.name, { type: activity.options as any });
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get(`${channels.welcome.id}`) as Discord.TextChannel;
    channel.send(`**${member.user?.username}**, ${lenguage.welcome_text}.`);
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.get(`${channels.bye.id}`) as Discord.TextChannel;
    channel.send(`**${member.user?.username}**, ${lenguage.bye_text}`);
})

client.on('message', async message => {

    if (!message.content.startsWith(`${process.env.PREFIX}`)) return;
    if (message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX?.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();

    for (let index = 0; index < commands.length; index++) {
        if (command == commands[index].name) {
            const Command = require(`./commands/${commands[index].use}`);
            var commandIsValid = Command.use(message, args, index);
            break;
        }
    }
    if (commandIsValid) {
        commandIsValid = false;
        return true;
    }
    else if (command === '') {
        await message.channel.bulkDelete(1);
        await message.channel.send(`${lenguage.syntax}: ` + "`" + `${process.env.PREFIX}${lenguage.command} [${lenguage.required}] (${lenguage.optional})` + "`" + ``);
        utils.deleteBotMessage(message.channel, 1);
    }
    else {
        await message.channel.bulkDelete(1);
        await message.channel.send(`${lenguage.error}: command invalid`);
        utils.deleteBotMessage(message.channel, 1);
    }


});

client.login(process.env.TOKEN);