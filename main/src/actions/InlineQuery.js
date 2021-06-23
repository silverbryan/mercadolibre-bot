const { sites } = require('../config');

module.exports = async ({ inlineQuery, answerInlineQuery, app }) => {
    const searchResults = await app.getItems(sites[0].siteId, inlineQuery.query);
    const items = searchResults && searchResults
        .map(({ id, title, price, currency_id, thumbnail, permalink }) => ({
            id,
            type: "article",
            title,
            description: app.formatPrice(price, sites[0].id, currency_id),
            thumb_url: thumbnail,
            input_message_content: {
                message_text: app.formatMessage({ permalink }),
                parse_mode: "HTML"
            }
        }))
    return answerInlineQuery(items);
}