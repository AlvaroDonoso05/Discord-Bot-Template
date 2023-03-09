const { Events } = require('discord.js');
const log = require("../../code/Signale");

module.exports = {
	name: Events.ShardDisconnect,
	execute(client, error, id, event) {
		log.shard(`ID Desconectado del Shard (${id})`);
		log.shard(`Event Desconectado del Shard (${event})`);
	},
};
