const { Events } = require('discord.js');
const log = require("../../code/Signale");

module.exports = {
	name: Events.ShardResume,
	execute(client, error, id, event) {
		log.error(`Shard ID y EVENT en funcionamiento de nuevo (${id}) (${event})`);
	},
};
