const { bot } = require('./src/app');

module.exports = async function (context, req) {
    try {
        bot
            .handleUpdate(JSON.parse(req.rawBody))
            .catch((error) => {
                console.log('Error processing update');
                console.log(error);
            });
    } catch (error) {
        console.error('Error parsing body', error);
        return context.res = {
            status: 400,
            body: ""
        };
    }
};