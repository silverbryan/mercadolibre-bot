require('dotenv').config();
const Telegraf = require('telegraf');
const actions = require('./actions');
const commands = require('./commands');
const utils = require('./context');

const bot = new Telegraf(process.env.BOT_TOKEN, { webhookReply: true });

bot.context.app = utils;
bot.command('/start', commands.start)
bot.command('/about', commands.about)
bot.on('inline_query', actions.inlineQuery)

module.exports = { bot };