const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam i�in herhangi bir �ey yazmal�s�n.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 's�yle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: '�stedi�iniz �eyi bota yazd�r�r.',
  usage: 'yaz [yazd�rmak istedi�iniz �ey]'
};