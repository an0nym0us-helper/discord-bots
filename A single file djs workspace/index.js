const color = require('./colors.js');
color({border:"--------------------------------------------------------------------"});
const { TOKEN, guildID, clientID, authorID, mongodbURI } = process.env;//using gitpod evnironment variables
color({ imp: '\nTOKEN : ' + TOKEN + '\nguildID : ' + guildID + '\nclientID : ' + clientID + '\nauthorID : ' + authorID + '\nmongodbURI : ' + mongodbURI });
const { Client, Collection, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages
    ]
});
// -----------------------------------------------------------------------------
client.once(Events.ClientReady, () => {
    color({ title:'Name :', text: ` ${client.user.tag}` });
    color({ title:'Status :', text: ` online` });
    color({ comt: 'Wating for Event ...(/)' });
})
client.on(Events.MessageCreate, (msg) => {
    if (msg.author === clientID) return;
    try {
        if (msg.channelId === '1085522038116065281') {
            if (!msg.author === authorID) msg.channel.send({ content: "commands are not avaliable for U !" });
            if (msg.content === 'ping') msg.reply({ content: "pong :upside_down: !" });
        } else {
            msg.channel.send({ content: "type commands in channel : 'bot-testing' if u do not have that channel then asked for it from .." });
        }
    } catch (error) {
        color({ para: `\n${error.name} : ${ error.message }` });
        color({ para: `File: ${__filename}` });
        color({ para: `Line: ${error.stack.split('\n')[1].split(':')[1]}\n` });
        // color({ para: error.stack });
        msg.reply({ content: `Error: App crashed in event 'MessageCreate'. File: ${__filename.split('/').pop()}` });
    }
})

client.on(Events.Error, (err) => {
    color({ para: err })
})
// -----------------------------------------------------------------------------
client.login(TOKEN);
color({ border: "--------------------------------------------------------------------" })



