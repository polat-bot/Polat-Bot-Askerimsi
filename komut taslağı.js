const Discord = require('discord.js');


exports.run = function(client, message) {

};

exports.conf = {
  enabled: true, //komutut açtýk
  guildOnly: false, //sadece servere özel yapmadýk
  aliases: ['ping','p'], //farklý çaðrýlar ekledik
  permLevel: 0 //kimlerin kullanabileceðini yazdýk (bot.js dosyasýnda perm leveller yazýyor)
};

exports.help = {
  name: 'ping', //adýný belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir', //açýklamasý
  usage: 'ping' //komutun kullaným þekli (mesela hava <bölge>)
};

//komut taslaðýmýz basit anlatýmýný zaten dosyalarda bulursunuz
//bu ise bizim komut taslaðýmýz
//bunun üzerinden gideceðiz