const discord = require("discord.js")
require("dotenv").config()

const client = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log('Logged in as', client.user.tag)
})

client.on("messageCreate", (message) => {
    if (message.content == "ping"){
        message.reply("pong.")
    }
})

client.on("guildMemberAdd", (message) => {
    if ()
})

client.on("guild")

client.login(process.env.TOKEN)