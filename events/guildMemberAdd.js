module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Ho� geldin **' + username + '**!');
    member.guild.defaultChannel.send('hg '+username+'');
};