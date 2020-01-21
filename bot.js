const Discord = require('discord.js');
const { prefix, token, author } = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot || message.author.id != author) return;
    if (message.content == `${prefix}ping`)
        message.channel.send("Pong!");
});

client.login(token);
