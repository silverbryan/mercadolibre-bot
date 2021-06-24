module.exports = ({ reply, from }) => {
    const { first_name, last_name } = from;
    return reply(`Hola, ${first_name} ${last_name} 👋🏻`);
}