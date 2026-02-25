// Import des modules
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

// Création du bot Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Quand le bot est prêt
client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag}!`);
});

// Commande simple : répond "Pong!" quand quelqu'un tape "!ping"
client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

// Connexion du bot (mettre ton token dans Render en tant que variable d'environnement)
client.login(process.env.TOKEN);

// Serveur express pour Render (port 3000)
app.get('/', (req, res) => {
    res.send('Bot Discord actif !');
});

app.listen(3000, () => {
    console.log('Serveur web actif sur le port 3000');
});
