const { REST, Routes } = require('discord.js');
require("dotenv").config();
const fs = require('node:fs');
const path = require('node:path');

const rest = new REST({ version: '9'}).setToken(process.env.DISCORD_TOKEN)

    try{
        const commands = []
        fs.readdirSync('./commands').forEach(async (category) => {
            const commandFiles = fs.readdirSync(`./commands/${category}`).filter((archivo) => archivo.endsWith('.js'))
            for (const archivo of commandFiles) {
                const command = require(`./commands/${category}/${archivo}`)
                console.log(`Registered command ${archivo}`);
                commands.push(command.data.toJSON())
            }
        })

        console.log('Started refreshing application (/) commands.');
        if(process.env.SANDBOX_MODE == "true") {
            rest.put(
                Routes.applicationCommands(process.env.DISCORD_ID),
                { body: commands },
            );
        } else if(process.env.SANDBOX_MODE == "false") {
            rest.put(
                Routes.applicationCommands(process.env.DISCORD_ID, process.env.GUILD_ID),
                { body: commands },
            );
        } else {
            console.log('You have to put in the .env config file in the SANDBOX_MODE, true or false to continue this command')
            return;
        }

        console.log('Successfully reloaded application (/) commands.');
    } catch(e) {
        console.error(e)
    }
