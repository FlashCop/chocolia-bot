const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("$")

bot.on('ready', function() {
    bot.user.setGame("Command: $help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        var checkup = new Discord.RichEmbed()
            .setColor("#007CFF")
            .setTitle(message.author.username + ", :point_right: Regarde dans tes messages privés !")
        message.channel.sendEmbed(checkup).then(function (helpmessagefor) {
            helpmessagefor.delete(10*1000);
        })
        var help_embed = new Discord.RichEmbed()
            .addField(":pushpin: Liste des commandes disponible:", "** **")
            .setColor('#007CFF')
            .addField(":point_right: - !nick <pseudo>", "Permet de  changer votre pseudo !")
            .addField(":point_right: - !sinfo ", "Permet de voir quelques informations sur le serveur !")
            .addField(":point_right: - !ping ", "Permet de voir le ping du bot !")
            .addField(":point_right: - !say [message]", "Permet d'envoyer un message sous la forme d'un embed !")
            .addField(":point_right: - !avatar @user", "Permet de voir l'avatar d'un joueur choisi !")
            .addField(":point_right: - !report [message]", "Permet d'envoyer un rapport au staff ! (Ne pas envoyer de photo !)")                                                                                              
            .addField(":point_right: - !maj ", "Permet de voir les nouveautés, des nouvelles mise à jour !")                    
            .addField("Commandes STAFF Du Bot !", "** **")
            .addField(":point_right: - !ban @user [raison]", "Permet de bannir un utilisateur !")
            .addField(":point_right: - !kick @user [raison]", "Permet d'expulser un utilisateur !")
            .addField(":point_right: - !mute @user [temps en minute]", "Permet de mute/demute un utilisateur pendant un certain temps!")
            .addField(":point_right: - !softban @user [temps en minute]", "Permet de SoftBan (Enlever le droit de voir et d'ecrire dans les channels) un utilisateur pendant un  certain temps!") 
            .addField(":point_right: - !sunban @user", "Permet de révoquer un softban !")                    
            .addField(":point_right: - !purge [nombre de message]", "Permet de supprimer plusieurs messages ! (Max : 100)")
            .addField(":point_right: - !lock [temps en minute]", "Permet de désactiver la parole dans un channel pendant un certain temps!")
            .addField(":point_right: - !cinfo @user", "Permet de récuperer des informations sur un utilisateur !")
            .addField(":point_right: - !play [lien ou nom]", "Permet de jouer de la musique dans un channel !")
            .addField(":point_right: - !leave", "Permet de faire quitter le bot du channel !")  
            .setFooter("Ceated By Flash ⚡☕#6853")
        message.author.sendEmbed(help_embed);
    }

    if (message.content === "Saluttest"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande Salut effectué");
    }   
});   
