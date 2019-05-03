const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on("guildMemberAdd", member => {
	
	var channel = member.guild.channels.find("name", "gelen-giden");
	if (!channel) return;
	
	var role = member.guild.roles.find("name", "〘V-T-G〙 Üye");
	if (!role) return;
	
	member.addRole(role); 
	
	channel.send(member + " artık " + role + " rolü ile aramızda");
	
	member.send("Aramıza hoş geldin! Artık〘V-T-G〙 Üye rolüne sahipsin!")
	
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
