const utils = require('../utils/index');
const { prefix, lenguage } = require('../config.json');

module.exports.executeCommand = async (message, command, args) => {
    for(let index = 0; index < lenguage.commands.length; index++) {
        if(command ==  lenguage.commands[index].name) {
            const Command = require(`./src/${lenguage.commands[index].use}`);
            var commandIsValid = Command.use(message, args, index);
            break;
        }
    }
    if(commandIsValid) return true;
    else if(command === '') {
        await message.channel.bulkDelete(1);
        await message.channel.send(`${lenguage.syntax}: `+"`"+`${prefix}${lenguage.command} [${lenguage.required}] (${lenguage.optional})`+"`"+``);
        utils.deleteBotMessage(message.channel, 1);
    }
    else {
        await message.channel.bulkDelete(1);
        await message.channel.send(`${lenguage.error}: command invalid`);
        utils.deleteBotMessage(message.channel, 1);
    }
}