const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

client.on('message', message => {

    if (message.content === 'kutas') {

       message.reply('jesteś');

       }

});


client.on('message', message => {

    if (message.content === 'XD') {

       message.reply('z ciebie');

       }

});


client.on('message', message => {
    // If the message is '!rip'
    if (message.content === 'parówa') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i2.wp.com/www.jegoeminencja.pl/wp-content/uploads/2013/07/pluszowy-fiut.jpeg');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});
 


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
