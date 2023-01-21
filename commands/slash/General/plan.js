const { EmbedBuilder } = require("discord.js");
const config = require('../../../config/config')
module.exports = {
    name: "plan",
    description: "Information Plan",
    type: 1,
    options: [
        {
            name: 'user',
            description: 'Information plan user',
            type: 6,
            required: true
        },
    ],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        const userInput = interaction.options.get('user').value;
        const user = interaction.guild.members.cache.get(userInput);
        // Plan
        var nameplan = "";
        var Concurrent = "";
        var maxtimes = "";
        var duration = "";
        var api = "";
        if(interaction.channel == null){
            return false;
        }

        console.log(user)
        console.log(config.Users.OWNERS)
        if(config.Users.OWNERS.includes(user.id)){
            nameplan = "Owners"
            Concurrent = "Unlimited"
            maxtimes = "Unlimited"
            api = config.icon.check
            duration = "Lifetime"
        }
        else if(config.Sliver.id.includes(user.id)){
            nameplan = "SLIVER"
            Concurrent = config.Sliver.Concurrents
            maxtimes = config.Sliver.maxtime
            duration = "Lifetime"
            api = config.icon.error

        }
        else if(config.Gold.id.includes(user.id)){
            nameplan = "GOLD"
            Concurrent = config.Gold.Concurrents
            maxtimes = config.Gold.maxtime
            api = config.icon.error
            duration = "Lifetime"
        }
        else if(config.GOD.id.includes(user.id)){
            nameplan = "GOD"
            Concurrent = config.GOD.Concurrents
            maxtimes = config.GOD.maxtime
            api = config.icon.error
            duration = "Lifetime"
        
        } else {
            nameplan = "No Plan"
            Concurrent = config.icon.error
            maxtimes = config.icon.error
            duration = config.icon.error
            api = config.icon.error

        }
        const embedinfo = new EmbedBuilder()
        .setTitle(interaction.guild.name + ' API')
        .addFields({
            name: '**Username**',
            value: '**' + user.user.username + '(ID: ' + user.user.discriminator + ')**'

        })
        

        .addFields({
            name: '**Plan**',
            value: '**' + nameplan + '**'
        })
        
        .addFields({
            name: '**Attack Time**',
            value: '**' + maxtimes + '**'
        })

        .addFields({
            name: '**Concurrents**',
            value: '**' + Concurrent + '**'
        })

        .addFields({
            name: '**Access API**',
            value: '**' + api + '**'


        })

        .addFields({
            name: '**Duration**',
            value: '**' + duration + '**'
        })

        .setThumbnail(user.user.avatarURL())

        interaction.reply({
            embeds: [embedinfo]
        })
    },
};
