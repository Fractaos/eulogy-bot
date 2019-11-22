const fs = require(`fs`);
const Discord = require(`discord.js`);
const bot = new Discord.Client();
const constants = JSON.parse(fs.readFileSync(`secret.json`));

bot.on(`message`, (message) => {});

bot.login(constants.token);