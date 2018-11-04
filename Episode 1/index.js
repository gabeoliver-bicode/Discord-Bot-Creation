const discord = require("discord.js"); 							// This is settinng the variable "discord" to the discord.js library.
const config = require("./config.json");						// This is settings the variable "config" to the file "config.json"
const bot = new discord.Client({disableEveryone: true});		// This is settings the variable "bot" to a new discord bot or "Client".

bot.on("ready", async () => {									// This is saying whent he variable "bot" is ready do the following:
    console.log(`${bot.user.username} is ready for action.`)	// This will pring the "bot's username is ready for act" to the console. NOTE: This grabs the username from your bot on your application https://discordapp.com/developers/applications
    bot.user.setActivity("Eating pie.");						// This will set your bots activity to "Eating pie"
})

bot.on("message", async message => {							// This will find when a message is sent it will do the following.
    if (message.author.bot) return;								// If the bot is the message sender then it will do nothing.
    if (message.channel.type === "dm") return;					// If the channel the command is being sent in is a "dm" then it wont do anything.

    let prefix = config.prefix;									// This is setting the variable "prefix" to config.prefix. Config being config.json as stated in the "const config = require("./config.json");
    let messageArray = message.content.split(" ");				// DONT WORRY ABOUT THESE THEY JUST MAKE YOUR COMMAND WORK.
    let cmd = messageArray[0];									// DONT WORRY ABOUT THESE THEY JUST MAKE YOUR COMMAND WORK.
    let args = messageArray.slice(1);							// DONT WORRY ABOUT THESE THEY JUST MAKE YOUR COMMAND WORK.

    if(cmd === `${prefix}test`){								// When the variable "cmd" = the variable prefix it will reply or @ you saying testaroni.
        return message.reply("Testaroni");
    }
    if(cmd === `${prefix}testaroni`){							// When the variable "cmd" = the variable prefix it will say test.
        return message.channel.send("Test");
    }
});

bot.login(config.token);										// This will actually connect the bot to your bot. VERY IMPORTANT! This will turn your bot on.