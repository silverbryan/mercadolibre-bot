module.exports = async ({ update, reply }) => {
    const message = update.message.text;
    const pattern = /\bmercadolibre.com.ar\b/g
    
    message.match(pattern) != null
    ?   await reply("🎉 !Perfecto Has Completado Correctamente el Tutorial!, Ahora podes usar el Bot en cualquier Chat, Grupo o Canal de Telegram sin limites 😎")
    :   await reply('⚠️ Opps, no reconocemos tu comando, para obtener ayuda escribe "/"')
}