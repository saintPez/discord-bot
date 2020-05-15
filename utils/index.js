const { time_delete } = require('../config.json');

module.exports.deleteBotMessage = (channel, amount) => {
    try {
        setTimeout(() => {
            channel.bulkDelete(amount);
        }, time_delete);
    }
    catch (e) {
        console.log(e);
    }
};