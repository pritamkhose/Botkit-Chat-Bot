// https://botkit.ai/docs/v4/
// https://studio.botkit.ai/getstarted.html
// https://botkit.ai/docs/v0/core.html

module.exports = function (controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase().trim() === 'bye', ['message'], async (bot, message) => {
        await bot.reply(message, 'Bye human');
    });

    var arr = ['hi', 'hello', 'howdy', 'hey', 'aloha', 'hola', 'bonjour', 'oi'];
    controller.hears(async (message) => message.text && arr.includes(message.text.toLowerCase().trim()), ['message'], async (bot, message) => {

        // do something to respond to message
        await bot.reply(message, 'Oh hai!');

    });
}