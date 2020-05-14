const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true})
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log ("Couldn´t file commands.")
        return;
    }

    jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`» ${f} loaded!`)
    bot.commands.set(props.help.name, props)
    })
})

const client = new Discord.Client();
exports.client = client;
const {name, token, prefix, activity} = require("./config.json");

client.once("ready", () => {
    console.log(name + ' - Bot');
    client.user.setActivity(activity.name, {type: activity.options});
 });

client.on('message', async message => {

    /*if (!message.content.startsWith(prefix)) return;*/
    if (message.author.bot) return;

    //const args = message.content.slice(prefix.length).trim().split(/ +/g);
    //const command = args.shift().toLowerCase();

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    //let args = messageArray.slice(1);

    let commandfile = bot.command.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot.message.args)
    /*if(command === 'info') {
        let status = {
            "online": "Online",
            "offline": "Offline",
            "idle": "Occupied",
            "dnd": "Do not bother"
         }
          
         let user = message.mentions.members.first() || message.member;
         let embed = new Discord.MessageEmbed()
         embed.setColor("RANDOM")
         embed.setDescription(`User info of`, `${user.user.username}`)
         embed.addField(`Name`, `${user.user.tag}`)
         embed.addField(`ID`, `${user.id}`)
         embed.addField(`Status`, `${status[user.presence.status]}`)
         return message.channel.send(embed)
    }
    if(command === 'clear') { // Not works, when don´t have permission can use the command.
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const fetched = await message.channel.messages.fetch({limit: args[1]});;
        let member = message.mentions.members.first() || client.users.cache.get(args[0]);
        message.channel.bulkDelete(fetched).catch(error => error)
        if (!message.member.roles.cache.find(r => r.name === "STAFF")) return message.channel.send("You don´t have permissions of STAFF");
        if(!member)
            return message.channel.send("» Syntax: !clear <number messages to delete>")  
        if(!member.bannable) 
            return message.channel.send("You don´t have permissions STAFF")
        if (!args[1]) return message.channel.send("I´m deleted a big quantity of messages.");
        message.channel.bulkDelete(`${args[1]}`).then(() => {
            message.channel.send(`Cleared ${args[1]} messages`)
        }
    )};
    if(command === 'avatar') {
        let usuario = message.mentions.members.first() || message.member;
        let embed = new Discord.MessageEmbed()
        embed.setAuthor(client.user.username, client.user.avatarURL)
        embed.setThumbnail(client.user.avatarURL)
        embed.setColor("RANDOM")
        embed.setTitle(`The avatar of the shit user is: @${usuario.user.username}`)
        embed.setImage(usuario.user.displayAvatarURL())
        embed.setFooter(activity.name)
        return message.channel.send(embed)
    }
    if(command === 'ban') {
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
    if(command === 'testclear') {
        await message.channel.bulkDelete(1);
        await message.channel.send('» Syntax: !testclear <require> <optional>');
        deleteBotMessage(message.channel, 3000, 1);
    }
    /*if(command === 'calc') { // This is a frustrate function :( help ThePez
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
    }*/
    /*if(command === 'help') {
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