const { lenguage } = require('../../config.json');

module.exports.use = async (message, args, index) => {
    const ping = Date.now() - message.createdTimestamp;
    message.channel.sendMessage(`${lenguage.ping}: ${ping} ms`);
    return true;
}