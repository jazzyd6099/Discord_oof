const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Yay..');

});
const prefix = "_";

client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
    } else
  if (message.content.startsWith(prefix + "braindead")) {
    message.channel.send("Yay..");
       }
});

client.login(process.env.BOT_TOKEN);
