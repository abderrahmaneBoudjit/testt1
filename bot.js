const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("552983601827020831")
setInterval(function() {
channel.send(`king ozx`);
}, 30)
})

client.login(process.env.BOT_TOKEN);