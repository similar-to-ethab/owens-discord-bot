const Discord = require("discord.js");
const client = new Discord.Client();


//const config = require("./config.json");

//can you add some bots so that when people react to a message it gives them the "participating" role
//and one that makes new people the "recruit" role


client.on("ready", () => {
    client.user.setActivity('discord.js', { type : "PLAYING" });
    client.user.setPresence({
        activities: [{
          name: "my code",
          type: "WATCHING"
        }],
        status: "idle"
    })
    //console.log(client);
    //console.log(client.channels.cache.get('908060019654799403'), 'heyya');
    //client.channels.cache.get('892932751605530634').send('@everyone I got hacks');
})


client.on('guildMemberAdd', member => {
    //const welcomeChannel = member.guild.channels.cache.find(ch => ch.id === 'id-of-the-channel-here');

    var role= member.guild.roles.cache.find(role => role.name === "recruit");
    member.roles.add(role);

    //welcomeChannel.send(`Hello there ${member}`);
});

client.on()


guild.roles.create({
    data: {
        name:"test",
        color:"BLUE",
    },
    reason: "fuck you owen",
});