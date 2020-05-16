import Discord from 'discord.js';
const { time_delete } = require('../../config.json');

module.exports.deleteBotMessage = (channel: Discord.TextChannel, amount: number) => {
    try {
        setTimeout(() => {
            channel.bulkDelete(amount);
        }, time_delete);
    }
    catch (e) {
        console.log(e);
    }
};