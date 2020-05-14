const Discord = require('discord.js');
const client = new Discord.Client();
const {name, token, prefix, activity, time_delete, lenguage} = require("./config.json");

client.once("ready", () => {
    console.log(name + ' - Bot');
    client.user.setActivity(activity.name, {type: activity.options});
 });

client.on('message', async message => {

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === '') {
        await message.channel.bulkDelete(1);
        await message.channel.send(`${lenguage.syntax}: `+"`"+`${prefix}${lenguage.command} [${lenguage.required}] (${lenguage.optional})`+"`"+``);
        deleteBotMessage(message.channel, 1);
    }

    if(command === lenguage.commands.info) {
        await message.channel.bulkDelete(1);
        const user = message.mentions.members.first() || message.member;
        const embed = new Discord.MessageEmbed();
        embed.setColor(`${lenguage.status[user.presence.status].color}`);
        embed.setDescription(`${lenguage.user_information}`, `${user.user.username}`);
        embed.addField(`${lenguage.name}`, `${user.user.tag}`);
        embed.addField(`${lenguage.id}`, `${user.id}`);
        embed.addField(`${lenguage.status.name}`, `${lenguage.status[user.presence.status].name}`);
        return message.channel.send(embed);
    }
    if(command === lenguage.commands.clear) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            await message.channel.bulkDelete(1);
            await message.channel.send(`${lenguage.error}: ${lenguage.command_not_allowed}`);
            deleteBotMessage(message.channel, 1);
        }
        else if(!args[0]) {
            try{
                await message.channel.bulkDelete(1);
                await message.channel.send(`${lenguage.syntax}: `+'`'+`${prefix}${lenguage.commands.clear} [${lenguage.amount}] (${lenguage.channel})`+'`'+``);
                deleteBotMessage(message.channel, 1);
            }
            catch(e) {
                console.log(e);
            }
        }
        else if(!args[1]){
            try{
                await message.channel.bulkDelete(parseInt(args[0]) + 1);
                message.channel.send(`${lenguage.info}: ${lenguage.deleted_messages}`);
                deleteBotMessage(message.channel, 1);
            }
            catch(e) {
                console.log(e);
                await message.channel.bulkDelete(1);
                message.channel.send(`${lenguage.error}: ${lenguage.invalid_amount}`);
                deleteBotMessage(message.channel, 1);
            }
        }
        else
        {
            try{
                await message.channel.bulkDelete(1);
                const channel = message.mentions.channels.first() || message.channel;
                await channel.bulkDelete(parseInt(args[0]) + 1);
                message.channel.send(`${lenguage.info}: ${lenguage.deleted_messages}`);
                deleteBotMessage(message.channel, 1);
            }
            catch(e) {
                console.log(e);
                await message.channel.bulkDelete(1);
                message.channel.send(`${lenguage.error}: ${lenguage.invalid_amount}`);
                deleteBotMessage(message.channel, 3000, 1);
            }
        }
    }
    if(command === lenguage.commands.avatar) {
        const user = message.mentions.members.first() || message.member;
        const embed = new Discord.MessageEmbed();
        embed.setAuthor(client.user.username, client.user.avatarURL);
        embed.setThumbnail(client.user.avatarURL);
        embed.setColor(`${lenguage.status[user.presence.status].color}`);
        embed.setTitle(`${lenguage.avatar_info}: @${user.user.username}`);
        embed.setImage(user.user.displayAvatarURL());
        embed.setFooter(activity.name);
        return message.channel.send(embed);
    }
    /*if(command === lenguage.commands.ban) {
        if (!message.member.roles.cache.find(r => r.name === "STAFF")) return message.channel.send("You don´t have permissions of STAFF");
        const args = message.content.slice(prefix.length).trim().split(/ +/g);    
          let member = message.mentions.members.first() || client.users.cache.get(args[0]);
          if(!member)
            return message.channel.send("» Syntax: !ban <username>")  
          if(!member.bannable) 
            return message.channel.send("You don´t have permissions STAFF")
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "You don´t have permissions of STAFF";
          await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} you don´t have permissions because: ${error}`))
            message.channel.send("Success!")
    }
    if(command === 'calc') { // This is a frustrate function :( help ThePez
        if (args[0]) return message.channel.send('Plase imput a calculation');

        let resp;
        try {
            resp = math.eval(args.join(''))
        } catch (e) {
            return message.channel.send('Please imput a valid calculation')
        }

         const embed = new Discord.MessageEmbed()
            .setColor(`#ffffff`)
            .setTitle('Calculator')
            .setField('Imput', `\n${args.join('')}`)
            .setField('Output' , `\n${resp}`)

        message.channel.send(embed);
    }
    if(command === lenguage.commands.help) {
        let usuario = message.mentions.members.first() || message.member;
        if (!message.member.roles.cache.find(r => r.name === "STAFF")) { // Commands of member (i don´t know why work like this)
            const embed = new Discord.MessageEmbed()
            embed.setColor(`#37b324`)
            embed.setTitle(`Command help requested by @${usuario.user.username}`)
            embed.setDescription(`Commands of Member:\n!help » Show the commands of the bot\n!avatar » Show the avatar user\n!info » Show info of user`)
            embed.setFooter(activity.name)
            return message.author.send(embed)
        }
        if (!message.member.roles.cache.find(r => r.name === "MEMBER")) { // Commands of admin (i don´t know why work like this)

            const embed = new Discord.MessageEmbed()
            embed.setColor(`#dac01a`)
            embed.setTitle(`Command help requested by @${usuario.user.username}`)
            embed.setDescription(`Commands of Admin:\n!ban » Ban to user\n!clear » Clear messages\n\nUsual commands:\n!help » Show the commands of the bot\n!avatar » Show the avatar user\n!info » Show info of user`)
            embed.setFooter(activity.name)
            return message.author.send(embed)
        }
    }*/
});

function deleteBotMessage(channel, num) {
    try {
        setTimeout( () => {
            channel.bulkDelete(num);
        }, time_delete);
    }
    catch(e) {
        console.log(e);
    }
}

client.login(token);