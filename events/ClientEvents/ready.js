const { Events } = require('discord.js');
const log = require("../../code/Signale");

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		log.complete({message: `Bot Connected Succesfully to Discord.`, suffix: `Tag: (${client.user.tag})` });
	},
};
