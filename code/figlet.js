const figlet = require("figlet");

console.log(
  figlet.textSync("DiscordBot", {
    font: "Ghost",
    horizontalLayout: 'default',
    verticalLayout: 'default',
    with: 80,
    whitespaceBreak: true
  })
);
