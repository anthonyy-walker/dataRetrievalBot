const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs");
const db = require('quick.db');


client.once('ready', () => {
    client.user.setPresence({status: 'dnd' });
    console.log(`Ready! || Logged in as ${client.user.username}`);

    client.on('message', async (message) => {
        if (message.content === '!DataRetrieval') 
        
if (message.author.id !== "593911112286601236") {
    return
} else {

    let e1 = new Discord.MessageEmbed()
    .setTitle(`Welcome ${message.author.username} to Server Data Retrieval`)
    .setDescription(`To continue please enter your clearance code, you have 30 seconds to enter your code.`)
    .setFooter('Developed by ...')
    message.channel.send(e1)
    var collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 })

    collector.on('collect', message => {
        if('Exec-627311' !== message.content) {
        message.delete()
        let e2 = new Discord.MessageEmbed()
        .setTitle('Code not accepted')
        .setFooter('Developed by ...')
        .setColor("RED")
        message.channel.send(e2)
        return;
        } else {
            message.delete()
            let e3 = new Discord.MessageEmbed()
            .setTitle('Password approved')
            .setDescription(`INFORMATION: Data Retriveal for **${message.guild}** **(GuildID: ${message.guild.id})** **(MemberCount: ${message.guild.members.cache.size})** \n\n Please enter this four digit code if the information above is correct and you would like to proceed with the Data Collection Process: 2️⃣1️⃣3️⃣4️⃣ \n\n The confirmation code will remain the in text chat until the Data Retrieval is complete.`)
            .setFooter('Developed by ...')
            .setColor("GREEN")
            message.channel.send(e3)
            collector.stop()
            var collector1 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 30000 })
            collector1.on('collect', message => {
        if('2134' !== message.content) {
            message.delete()
            let e4 = new Discord.MessageEmbed()
            .setTitle('Code not accepted')
            .setDescription(`Canceling...`)
            .setFooter('Developed by ...')
            .setColor("RED")
            message.channel.send(e4)
            return;
        } else { 
             (message.guild.members.cache.forEach(member => db.set(`${member.user.username}`, { UserDATA: member })))
            let e4 = new Discord.MessageEmbed()
            .setTitle(`Finished`)
            .setDescription(` Data was collected for the **${message.guild.members.cache.size}** members of **${message.guild}**`)
            .setFooter('Developed by ...')
            .setColor("GREEN")
             message.channel.send(e4)
        }
    })
}
    })
}
    })
})




client.login("")
       



 