const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
require("dotenv").config();
require('./code/figlet')
const fs = require('node:fs');
const log = require('./code/Signale');

setTimeout(() => {
    const client = new Client({
        // Intents
        fetchAllMembers: false,
        restTimeOffset: 0,
        failIfNotExists: false,
        shards: "auto",
        allowedMentions: {
            parse: ["roles", "users"],
            repliedUser: false,
        },
        intents: [
            // Uncomment only the ones you need
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            //GatewayIntentBits.GuildEmojisAndStickers,
            //GatewayIntentBits.GuildIntegrations,
            //GatewayIntentBits.GuildWebhooks,
            //GatewayIntentBits.GuildInvites,
            //GatewayIntentBits.GuildVoiceStates,
            //GatewayIntentBits.GuildPresences,
            //GatewayIntentBits.GuildMessages,
            //GatewayIntentBits.GuildMessageReactions,
            //GatewayIntentBits.GuildMessageTyping,
            //GatewayIntentBits.DirectMessages,
            //GatewayIntentBits.DirectMessageTyping,
            //GatewayIntentBits.DirectMessageReactions
        ],
        presence: {
            status: `${process.env.BOT_STATUS}`,
            afk: process.env.BOT_AFK,
            activities: [{
                name: `${process.env.BOT_ACTIVITY_NAME}`,
                type: parseInt(`${process.env.BOT_ACTIVITY_TYPE}`),
                url: `${process.env.BOT_ACTIVITY_URL}`
            }],
        }
    });

    // COMMAND HANDLING
    client.commands = new Collection();
    // Loaded Events
    log.loading('Loading Events')
    fs.readdirSync('./events').forEach(dirs => {
        const eventFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));;
        for (const file of eventFiles) {
            const event = require(`./events/${dirs}/${file}`);
            log.success(`Loaded Event ${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args));
            } else {
                client.on(event.name, (...args) => event.execute(...args));
            }
        }
    });
    // Loaded Commands
    log.loading('Loading Slash Commands')
    fs.readdirSync('./commands').forEach(dirs => {
        const slashCommand = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));
        for (const file of slashCommand) {
            const command = require(`./commands/${dirs}/${file}`);
            log.success(`Loaded Slash Command ${file}`);
            client.commands.set(command.data.name, command);
        }
    });

    client.login(process.env.DISCORD_TOKEN);

}, 2000)