const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot yeniden ba�lat�l�yor").then(msg => {
        console.log("[BOT]Yeniden ba�lat�l�yor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden ba�lat�r',
  usage: 'reboot'
};