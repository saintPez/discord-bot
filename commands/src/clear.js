const utils = require('../../utils/index');
const { lenguage } = require('../../config.json');

module.exports.use = async (message, args, index) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        await message.channel.bulkDelete(1);
        await message.channel.send(`${lenguage.error}: ${lenguage.command_not_allowed}`);
        utils.deleteBotMessage(message.channel, 1);
    }
    else if (!args[0]) {
        try {
            await message.channel.bulkDelete(1);
            await message.channel.send(`${lenguage.syntax}: ` + '`' + `${prefix}${lenguage.commands[index].use} [${lenguage.amount}] (${lenguage.channel})` + '`' + ``);
            utils.deleteBotMessage(message.channel, 1);
        }
        catch (e) {
            console.log(e);
        }
    }
    else if (!args[1]) {
        try {
            await message.channel.bulkDelete(parseInt(args[0]) + 1);
            message.channel.send(`${lenguage.info}: ${lenguage.deleted_messages}`);
            utils.deleteBotMessage(message.channel, 1);
        }
        catch (e) {
            console.log(e);
            await message.channel.bulkDelete(1);
            message.channel.send(`${lenguage.error}: ${lenguage.invalid_amount}`);
            utils.deleteBotMessage(message.channel, 1);
        }
    }
    else {
        try {
            await message.channel.bulkDelete(1);
            const channel = message.mentions.channels.first() || message.channel;
            await channel.bulkDelete(parseInt(args[0]) + 1);
            message.channel.send(`${lenguage.info}: ${lenguage.deleted_messages}`);
            utils.deleteBotMessage(message.channel, 1);
        }
        catch (e) {
            console.log(e);
            await message.channel.bulkDelete(1);
            message.channel.send(`${lenguage.error}: ${lenguage.invalid_amount}`);
            utils.deleteBotMessage(message.channel, 3000, 1);
        }
    }
    return true;
}