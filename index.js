const Discord = require('discord.js');
const client = new Discord.Client();
const { name, token, prefix, activity } = require("./config.json");

client.once("ready", () => {
    console.log(name + ' - Bot');

    client.user.setActivity(activity.name, { type: activity.options });
 });

client.on('message', async message => {

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === '') {
        await message.channel.bulkDelete(1);
        await message.channel.send('MODO: `!comando [requerido] (opcional)`');
        deleteBotMessage(message.channel, 3000, 1);
    }
});

function deleteBotMessage(channel, time, num) {
    try {
        setTimeout( () => {
            channel.bulkDelete(num);
        }, time);
    }
    catch(e) {
        console.log(e);
    }
}

client.login(token);