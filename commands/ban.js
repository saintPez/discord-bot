const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args) => {
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
 
module.exports.help = {
    name: "ban"
}