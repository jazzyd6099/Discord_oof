const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
    console.log('Yay..');
	client.user.setPresence({ game: { name: 'Yay..' }, status: 'Online' })
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
    } else
	if (message.content.startsWith("i love you denki")) {
	  message.reply("Aw. I love you too!");
	} else
	 if (message.content == "I hate myself".toLowerCase() || message.content == "I hate myself." || message.content == "i hate myself".toLowerCase() || message.content == "i hate myself.".toLowerCase()){
			message.reply("Don't hate yourself! I love you!");
			 } else 
	 if (message.content == "Is there anybody online?".toLowerCase() || message.content == "Is there anybody online?" || message.content == "Is anybody online?".toLowerCase() || message.content == "Is anybody online".toLowerCase()){
     	   message.channel.send("I'm online!");
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
	    	} else
			if (message.content.startsWith(prefix + "slap")) {
				let slappedUser = message.mentions.users.first();
            
            if(message.mentions.users.size < 1) return message.reply("You forgot to name a bitch to slap.");
            message.reply("just slapped the fuck out of " + slappedUser);
				}
});

client.login(process.env.BOT_TOKEN);
