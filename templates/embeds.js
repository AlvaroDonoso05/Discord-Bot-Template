const exampleEmbed = {
	color: fff,
	title: 'Some title',
	url: 'https://github.com/Donoso005/Discord-Bot-Template#readme',
	author: {
		name: 'Some name',
		icon_url: 'https://cdn.discordapp.com/attachments/975793431001583728/1083411802186076190/logo.png',
		url: 'https://github.com/Donoso005/Discord-Bot-Template#readme',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://cdn.discordapp.com/attachments/975793431001583728/1083411802186076190/logo.png',
	},
	fields: [
		{
			name: 'Regular field title',
			value: 'Some value here',
		},
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
	image: {
		url: 'https://cdn.discordapp.com/attachments/975793431001583728/1083411802186076190/logo.png',
	},
	timestamp: new Date().toISOString(),
	footer: {
		text: 'Some footer text here',
		icon_url: 'https://cdn.discordapp.com/attachments/975793431001583728/1083411802186076190/logo.png',
	},
};