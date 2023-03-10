# Discord Bot Template

Discord Bot Template to start adding custom commands and start making a Discord Bot for your server Easily, built on top of **[discord.js](https://discord.js.org/)** library.

# Proyect Files
```bash
│   .env.example
│   index.js
│   LICENSE
│   loadcommands.js
│   main.js
│   package-lock.json
│   package.json
│   README.md
├───code
│       figlet.js
│       Signale.js     
├───commands
│   ├───core
│   │       ping.js
│   │       
│   └───user
│           user.js
├───events
│   ├───ClientEvents
│   │       ready.js
│   │       
│   ├───InteractionEvents
│   │       InteractionCreate.js
│   │       
│   └───ShardEvents
│           ShardDisconnect.js
│           ShardError.js
│           ShardReady.js
│           ShardReconnecting.js
│           ShardResume.js
└───templates
        embeds.js
```

# Advantages for using this Template?

-   Beginner friendly, easy to understand
-   Templates for Embeds
-   Quick and easy to set up
-   Slash Command Support
-   Highly customizable
-   Shard Support

## Installation

## Before you start

- Make sure you download de main Branch for new updates, then you have to open a terminal inside the repository clone and run the commands ``npm install`` to get the dependencies.
- You need nodejs v16 or above, recommended v18, you can download here: **[node.js](https://nodejs.org/)**.
- Make sure you download the latest version from npm, you can download here: ```npm i npm@latest``` 
- You need to download the latest version from Git, you can download here: **[Git](https://git-scm.com/downloads)** 

#### Main Library

```bash
$ npm install discord.js # main library
```

### Setup

First you have to rename the file ``.env.example`` to ``.env``. Then you have to add your custom configuration to start your bot.
In the **BOT CONFIGURATION** you have to add your discord bot token, the discord bot client and optional the secret.

> **Did You Know?** _You can add your custom config in the .env configuration._

Then you can create your commands following this structure:


```js
const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping') // The name of the command
		.setDescription('Replies with Pong!'), // The description of the command
	async execute(interaction, client) {
        // the command function
	},
};
```

To create events you can follow this structure, remember to place the events file in the events folder:


```js
const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		log.complete({message: `Bot Connected Succesfully to Discord.`, suffix: `Tag: (${client.user.tag})` });
	},
};

```
Then you have to create the commands inside the command folder, is important to create different folder inside the **commands folder** to organize the commands. 

```bash
├───commands
│   ├───core
│   │       ping.js
│   │       
│   └───user
│           user.js
```

In the .env file there is an option to enable "SANDBOX_MODE", if this mode is enabled, the commands will only be registered in the guild that we have configured in the "GUILD_ID" section, if it is disabled, the commands will be registered in all the guilds in which the bot is attached.

To register the commands you have to run the command **npm run loadcommands** then you can run the bot using the command **npm start**

That's all it takes to build your own discord bot.

You can get support sending a message to Don_oso005#6475 on Discord. If you have see any bugs please report in  **[Bugs](https://github.com/Donoso005/Discord-Bot-Template/issues)**

**IMPORTANT!!** Remember to give rights to Don_oso005
