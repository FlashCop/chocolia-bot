const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setGame("Command: $help");
    console.log("Connected");
});

bot.login("NDY2MjIzNzQzMjYyNTIzNDAy.DiY8Qw.iuoihvtzWytAybngCpcmXAN6GQE");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n - $Help");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }
});   
