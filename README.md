# WORKSHOP-Discord.js
In this workshop, you will learn the basics to create a responsive Discord bot using the discord.js library.


## Pre-requisites

### Creating your bot user
Of course you will need a Discord account.
If you do not have one already, you can create one [here](https://discordapp.com/register)

On Discord's [Developer Portal](https://discordapp.com/developers/applications/), click on `New Application`.
![New App Button](https://cdn.discordapp.com/attachments/517409912129716224/567713879249911820/unknown.png)

Choose a lovely name for your bot, then click on `Create`

Once created, move to the `Bot` section.
![Bot Section](https://cdn.discordapp.com/attachments/517409912129716224/567715805819699200/unknown.png)

Create a new Bot using the `Add Bot` button, then fill in any necessary info, such as a profile picture and a name.
Acknowledge your new Bot's token, but do **NOT** reveal it to anyone! This token is as sensitive as a password.
Untick `Public Bot` so only you can invite it to servers.

### Adding your bot to the server
Join this workshop's [dedicated server](https://discord.gg/hmmcufG).

Then visit an URL you'll have to modify a bit:
`https://discordapp.com/api/oauth2/authorize?client_id=[ID]&scope=bot&permissions=126016`
Replace \[ID\] (including brackets) with your App's client ID.

On this URL you will be prompted to add your bot to a server.
Choose the Workshop server, make sure all the fitting permission boxes are checked, then proceed.

Your Bot should now appear on the server!


### Installing Node.js and NPM
`sudo apt-get install nodejs`

### Setting up your working directory
Clone this repository, then execute `npm install .` at the root to install all the required dependancies.

In `config.json`, fill the `prefix` field with the prefix you want your bot to answer to, and `token` with your Bot's token (keep it secret!).

Now if you execute `node .`, your Bot should wake up and, with the little code provided, respond to `[prefix]ping` by `Pong!` on Discord.




## Programming your bot

### Hello World!
So we now have a bot, but a bot that does things sure is better!

If we take a look at the bit of code provided by the repository, we can see an event `on message`.

```js
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content == `${prefix}ping`)
        message.channel.send("Pong!");
});
```

This is where most of our bot's actions are coded.
Try to make it answer differently, depending on the message received.

To this end, we will use [message](https://discord.js.org/#/docs/main/stable/class/Message):
- Use `message.content` to check the message's content
- Use `message.author` to know *who* sent that message
- Use `message.channel.send()` to send a message in the channel in which the message was sent

Along with the `Pong!` response, make your bot say `Hello!` when an user says `[prefix]hi`, and `It is sunny outside! :sunny:` when an user says `[prefix]weather`.


### Not quite a RPG Guild
Ok, we have a fun discussion bot, but to be honest, it's pretty useless.
Let's add some utility commands!

Before anything else, it is important to know that Discord servers are referred to as `Guilds`.

Upon receiving the message `[prefix]list`, your bot should list all the users present in the guild.

To this end, we will have to dig deeper inside discord.js' documentation:
- [message](https://discord.js.org/#/docs/main/stable/class/Message)
- [channel](https://discord.js.org/#/docs/main/stable/class/TextChannel)
- [guild](https://discord.js.org/#/docs/main/stable/class/Guild)
- [member](https://discord.js.org/#/docs/main/stable/class/GuildMember)
- [user](https://discord.js.org/#/docs/main/stable/class/User)
