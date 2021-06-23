module.exports = ({ reply, from }) => {
    const { first_name, last_name } = from;
    reply(`Hola, ${first_name} ${last_name} 👋🏻`);
    reply(`Para comenzar solo tienes que escribir en cualquier chat de telegram @MercadolibreXbot.\n
        Nota: pruebaEste paso solo se realiza una sola vez la proxima ya reconocera el comando automaticamente 😎`)
}