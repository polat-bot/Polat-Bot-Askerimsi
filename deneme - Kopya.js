const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`${client.user.tag}Deneme Bot Girdi !`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

});

client.on('message', msg => {
  if (msg.content === prefix +'avatarım') {
    msg.channel.send(msg.author.avatarURL);
  }

if (message.content === prefix + 'reboot') {

	  if (message.author.id === "511584183362256917") {
		  msg.reply('[BOT]Yenden başlatılıyor...').then(msg => {
			  console.log('yeniden başlatılıyor')
			  process.exit(0);
		  });
	  } else
		  message.channel.send('Maalesef bu komutu kullanamazsın. Benim yapımcım değilsin!')
  }

});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm selam,  Hoş Geldin!');
  }
});

client.on('message', msg => {
  if (msg.content === 'abd') {
    msg.reply('ABD Katılmak İstiyorsan Abd Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'thk') {
    msg.reply('THK Katılmak İstiyorsan THK Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'jöh') {
    msg.reply('Jöh Katılmak İstiyorsan Jöh Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'joh') {
    msg.reply('Jöh Katılmak İstiyorsan Jöh Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'bbt') {
    msg.reply('BBT Katılmak İstiyorsan BBT Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'tkk') {
    msg.reply('TKK Katılmak İstiyorsan TKK Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'tkt') {
    msg.reply('TKT Katılmak İstiyorsan TKT Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'vem') {
    msg.reply('VEM Katılmak İstiyorsan VEM Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'poh') {
    msg.reply('PÖH Katılmak İstiyorsan PÖH Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'pöh') {
    msg.reply('PÖH Katılmak İstiyorsan PÖH Alım Odasına Girmen Yeter!');
  }
});

client.on('message', msg => {
  if (msg.content === 'klan') {
    msg.reply('Klanlara Katılmak İçin Alım Odalarına Girebilirsiniz!');
  }
});

client.on('message', msg => {
  if (msg.content === 'sea') {
    msg.reply('ase,  Hoş Geldin!');
  }
});

client.on('message', msg => {
  if (msg.content === 'selam') {
    msg.reply('Aleyküm selam,  Hoş Geldin!');
  }
});

client.on('message', msg => {
  if (msg.content === 'nbr') {
    msg.reply('Sen Nasılsın!');
  }
});

client.on('message', msg => {
  if (msg.content === 'ip') {
    msg.reply('DİSCORD ADRESİ:  https://discord.gg/65wEPRC!');
    msg.reply('Sunucu IP: mtasa://188.165.50.67:22003!');
  }
});

client.on('message', msg => {
  if (msg.content === 'yetkili') {
    msg.reply('Sayın Oyuncu Yönetim Ekibimiz En Kısa Sürede Cevap Verecektir.!');
  }
});

client.on('message', msg => {
  if (msg.content === 'yetki fiyatları') {
    msg.reply('Yetki Fiyatları odasına girebilirisin!  #????yetki-fiyatları  !');
  }
});

client.login(ayarlar.token);
