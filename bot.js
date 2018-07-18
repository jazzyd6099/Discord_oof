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
            message.reply("You just slapped the fuck out of " + slappedUser);
			} else
			if (message.content.startsWith(prefix + "copycat")) {
			 message.member(client.user).setNickname('Bot Creator');
            client.user.setAvatar("6af2d328-15b7-4130-a889-a9a8e10711e4.png");
				} else
				if (message.content.startsWith(prefix + "copycat clear")) {
				message.member(client.user).setNickname('Denki Kaminari');
            client.user.setAvatar("tumblr_oxkkpsQ8jP1v13047o1_500.jpg");
            message.channel.send("Testing! Am I back to normal?");
            setTimeout( () => {
                message.channel.bulkDelete(2);
});

client.login(process.env.BOT_TOKEN);
