const { Events } = require('discord.js');
const log = require("../../code/Signale");

module.exports = {
	name: Events.ShardReady,
	once: true,
	/**
    * @param {Client} client
    */

	execute(client, error, id) {
		log.shard(`Shard Listo y Conectado`);
	},
};
