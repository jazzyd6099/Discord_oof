const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Yay..');

});
client.on("message", (message) => {
  if (message.content.startsWith("prefix?")) {
    message.channel.send("Heh, mine's _");
  } else
   if (message.content.startsWith("I love my bot family")) {
    message.channel.send("I love you too!");
  }
});
const prefix = "_";

client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
    } else
     if (message.content.startsWith(prefix + "braindead")) {
        message.channel.send("Yay..");
  } else
   if (message.content.startsWith(prefix + "help")) {
    message.channel.send("ping, braindead, help. Prefix is _");
       }
});

client.login(process.env.BOT_TOKEN);
