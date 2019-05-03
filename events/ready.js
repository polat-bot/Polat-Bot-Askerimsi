const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar y�klendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giri� yap�ld�!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}yard�m + ${client.guilds.size} sunucu + ${client.users.size} kullan�c�`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarland�!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: �u an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullan�c�ya hizmet veriliyor!`);
};