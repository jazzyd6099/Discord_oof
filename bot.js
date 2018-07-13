const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Yay..');

});
client.on("message", (message) => {
  if (message.content.startsWith("prefix?")) {
    message.channel.send("Heh, mine's _");
  }
});
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome, ${member}!`);
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
    message.channel.send("(_)ping, (_)braindead, (_)help for now.");
       }
});

client.login(process.env.BOT_TOKEN);
