const Discord = require('discord.js');
const client = require('../../index');

module.exports.use = async (message, args, index) => {
    message.channel.send('Ping?').then(m => m.edit(`API: ${m.createdTimestamp - message.createdTimestamp}ms. Web Socket: ${Math.round(client.ws.ping)}ms.`))
}
