const { EmbedBuilder } = require("discord.js");
const config = require('../../../config/config')
module.exports = {
    name: "help",
    description: "Information commands",
    type: 1,
    options: [
        {
            name: 'attack',
            description: 'Help commands Attack',
            type: 5,
        },
        {
            name: 'lookup',
            description: 'Help commands Lookup',
            type: 5,
        },
        {
            name: 'checkports',
            description: 'Help commands Checkports',
            type: 5,
        },
        {
            name: 'minecraft',
            description: 'MINECRAFT RESOLVER',
            type: 5,
        },
        {
            name: 'fivem',
            description: 'CFX RESOLVER',
            type: 5,
        },
        {
            name: 'plan',
            description: 'Information plan user',
            type: 5,
        },
    ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const command = interaction.options._hoistedOptions[0].name
        console.log(command)
        if(command === "attack"){
            const embedattack = new EmbedBuilder()
            .setDescription('Here is the command if you have a problem ask an owner')
            .addFields({
                name: 'EXEMPLE 1',
                value: '```fix\n /attack <ip> <port> <time> <method>```' 
            })
            .addFields({
                name: 'EXEMPLE 2',
                value: '```fix\n /attack 8.8.8.8 80 120 DNS-AMP```'
            })
            .addFields({
                name: 'Other',
                value: 'All method : **`/method`**'
            })
            .setImage(config.icon.setimage)
            interaction.reply({
                embeds: [embedattack],
                ephemeral: true
            })
        }
        else if(command === "lookup"){
            const embedlookup = new EmbedBuilder()
            .setDescription('Here is the command if you have a problem ask an owner')
            .addFields({
                name: 'EXEMPLE 1',
                value: '```fix\n /lookup <ip> <format```'
            })
            .addFields({
                name: 'EXEMPLE 1',
                value: '```fix\n /lookup 8.8.8.8 org```'
            })
            .addFields({
                name: 'Other',
                value: 'All format : **`format`**'
            })
            .setImage(config.icon.setimage)
            interaction.reply({
                embeds: [embedlookup],
                ephemeral: true
            })
        }
        else if(command === "checkports"){
            const embedcheck = new EmbedBuilder()
            .setDescription('Here is the command if you have a problem ask an owner')
            .addFields({
                name: 'EXEMPLE 1',
                value: '```fix\n /checkports <ip>```'
            })
            .addFields({
                name: 'EXEMPLE 2',
                value: '```fix\n /checkports 8.8.8.8```'
            })
            .setImage(config.icon.setimage)
            interaction.reply({
                embeds: [embedcheck],
                ephemeral: true
            })
            
        }
        else if(command === "minecraft"){
            const embedminecraft = new EmbedBuilder()
            .setDescription('Here is the command if you have a problem ask an owner')
            .addFields({
                name: 'EXEMPLE 1',
                value: '```fix\n /minecraft <Adresse>```'
            })
            .addFields({
                name: 'EXPEMPLE 2',
                value: '```fix\n /minecraft Hypixel.net```'
            })
            .setImage(config.icon.setimage)
            interaction.reply({
                embeds: [embedminecraft],
                ephemeral: true
            })

        }
        else if(command === "fivem"){
            const embedfivem = new EmbedBuilder()
            .setDescription('Here is the command if you have a problem ask an owner')
            .addFields({
                name: 'EXEMPLE 1',
                value: '```fix\n /fivem <Cfx Adresse>```'
            })
            .addFields({
                name: 'EXPEMPLE 2',
                value: '```fix\n /fivem https://cfx.re/join/no9bx```'
            })
            .setImage(config.icon.setimage)
            interaction.reply({
                embeds: [embedfivem],
                ephemeral: true
            })
            

        }
        else if(command === "plan"){
            const embedplan = new EmbedBuilder()
        } else {
            const embedhelp = new EmbedBuilder()
        }
    },
};
