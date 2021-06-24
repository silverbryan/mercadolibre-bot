module.exports = async ({ reply, from }) => {
    const { first_name, last_name } = from;
    await reply(`Hola, ${first_name} ${last_name} 👋🏻`);
    await reply("Para empezar a usar escribe en el chat @mercadolibreXBot, asi como se muestra abajo 👇");
    await reply("!Perfecto! 👏🏻, Ahora podes usar el Bot en cualquier Chat, Grupo o Canal de Telegram sin limites 😎");
}