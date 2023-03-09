require("dotenv").config();
const log = require("./code/Signale");
const { ShardingManager } = require("discord.js");

const manager = new ShardingManager("./index.js", {
  token: process.env.DISCORD_TOKEN,
});

manager.on("shardCreate", (shard) => setTimeout(() => {
  log.shard(`Launched shard ${shard.id}`)
}, 1000))
manager.spawn();