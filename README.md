# WORKSHOP-Discord.js
In this workshop, you will learn the basics to create a responsive Discord bot using the discord.js library.


## Pre-requisites

### Installing Node.js and NPM
`sudo apt-get install nodejs`

### Setting up your working directory
Clone this repository, then execute `npm install .` at the root to install all the required dependancies.

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
Choose the Workshop server, make sure all the fitting permissions boxes are checked, then proceed.

