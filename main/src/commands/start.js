const { statics } = require('../config');

module.exports = async ({ reply, from, replyWithAnimation }) => {
    const { first_name, last_name } = from;
    await reply(`Hola, ${first_name} ${last_name} 👋🏻`);
    await reply("Para empezar a usar escribe en el chat @mercadolibreXBot, asi como se muestra abajo 👇");
    await replyWithAnimation(statics.tutorial);
}