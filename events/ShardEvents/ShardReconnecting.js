const { Events } = require('discord.js');
const log = require("../../code/Signale");

module.exports = {
	name: Events.ShardReconnecting,
	execute(client, error, id) {
		log.shard(`Reconectando con el Shard (${id})`);
	},
};
