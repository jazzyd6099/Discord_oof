const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
    console.log('Yay..');
	client.user.setPresence({ game: { name: 'Yay..' }, status: 'invisible' })
  .then(console.log)
  .catch(console.error);
});
client.on("message", (message) => {
  if (message.content.startsWith("prefix?")) {
    message.channel.send("Heh, mine's '_'");
  } else
   if (message.content.startsWith("I love my bot family")) {
    message.channel.send("I love you too!");
   } else 
    if (message.content.startsWith("Okay fine,")) {
     message.channel.send(":thumbsup: Wehehehe :thumbsup:");
  }
});
const prefix = "_";

client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
    } else
   if (message.content.startsWith(prefix + "help")) {
    message.channel.send("ping, braindead, help, use your quirk. Prefix is _");
   } else
    if (message.content.startsWith(prefix + "use your quirk")) {
     message.channel.send("Okay fine, just for you! :cloud_lightning: 10,000 volts! :cloud_lightning:");
    }
});

client.login(process.env.BOT_TOKEN);
