require('dotenv').config();
const Telegraf = require('telegraf');
const actions = require('./actions');
const commands = require('./commands');
const utils = require('./context');
const { ENVIRONMENT, BOT_TOKEN, BOT_TOKEN_DEV } = process.env;
let bot;

ENVIRONMENT === "PRODUCTION"
    ? bot = new Telegraf(BOT_TOKEN, { webhookReply: true })
    : bot = new Telegraf(BOT_TOKEN_DEV)

bot.context.app = utils;

bot.command('/start', commands.start);
bot.command('/about', commands.about);
bot.command('/clear', commands.clear);
bot.on('inline_query', actions.inlineQuery);

module.exports = { bot };