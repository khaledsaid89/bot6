const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603542918711607297")
setInterval(function() {
channel.send(`gamd agd3n`);
}, 30)
})

client.login(process.env.BOT_TOKEN);