const { Events } = require('discord.js');
const log = require("../../code/Signale");

module.exports = {
	name: Events.ShardError,
	execute(client, error, id) {
		log.shard(`Error en el Shard (${id})`);
		console.log(error);
	},
};
