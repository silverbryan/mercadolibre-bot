require('dotenv').config();
const Telegraf = require('telegraf');
const { BOT_TOKEN, APP_URL } = process.env;

const bot = new Telegraf(BOT_TOKEN, { webhookReply: true });
bot.telegram.setWebhook(APP_URL);
console.log('Succesfully');