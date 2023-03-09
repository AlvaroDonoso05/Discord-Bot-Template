const { Events } = require('discord.js');
require("dotenv").config();
const log = require("../../code/Signale");

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction, client) {
		if (interaction.isChatInputCommand()) {
            if (interaction.user.bot) return;
            const command = interaction.client.commands.get(interaction.commandName);
            
            //===============< EXECUTE CMD >===============\\
            try {
                await command.execute(interaction);
            } catch (error) {
    
                console.log(error);
            };
        };
    },
};