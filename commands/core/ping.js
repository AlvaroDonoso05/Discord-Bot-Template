const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction, client) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
    const embed = new EmbedBuilder()
    .setAuthor({
      name: "Notch Utilities",
      iconURL: "https://i.imgur.com/W2LchSV.png",
    })
    .setColor(0x2986cc)
    .setThumbnail("https://i.imgur.com/W2LchSV.png")
    .setDescription("🏓 Pong!" + "\n" + "Discord Bot Template: [Click Here!](https://github.com/Donoso005/Discord-Bot-Template)")
    .addFields(
      { name: "🛰️ Bot Ping:", value: `**${sent.createdTimestamp - interaction.createdTimestamp}ms**` }
    )
    .setFooter({ text: "v1.0.0 - Discord Bot Template - Made by Don_oso005" })
    .setTimestamp();

    interaction.editReply({ embeds: [embed]})
	},
};