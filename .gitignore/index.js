const Discord = require('discord.js')
var bot = new Discord.Client();
var prefix = ('b!')
bot.login(process.env.TOKEN)

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'b!say | BroadCastBOT', type: 0 }});
    console.log('Bot connecté avec succès !');
});


bot.on('message', message => {

	let msg = message.content.toLowerCase();
	let args = message.content.slice(prefix.length).trim().split(' ');
	let command = args.shift().toLowerCase();
	let say = args.join(' ');

	if(command === 'say') {
  if(!args[0]) return message.channel.send("Veuillez Introduire Un Texte - b!say Bonjour");
		var help_embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.addField(`Annonce de @${message.author.tag}`, say)
		message.channel.sendEmbed(help_embed)

		message.delete();
	}
})

bot.on('guildMemberAdd', member => {
    bot.channels.get("480675158130950145").send(`Bienvenue sur 🥂𝓒𝓲𝒆𝓵𝓫𝓵𝓾𝔁 🥂 @${member.user.username}`);
    //logs
    //bot.channels.get("478913484436799497").send(member.user.username + " __**Vient de rejoindre le serveur**__")
});

bot.on('guildMemberRemove', member => {
	bot.channels.get('480675158130950145').send(`__Aurevoir__ @${member.user.username} :cry:`)
})

