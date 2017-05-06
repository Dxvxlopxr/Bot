const Discord = require("discord.js");
const client = new Discord.Client();

client.login("MzEwMjUwNzUzNTM0OTg0MTky.C-7PDg.i2_2MhAuaIJZBoHg-ioyzvohsck");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.sendMessage("pong!");
  }
});
