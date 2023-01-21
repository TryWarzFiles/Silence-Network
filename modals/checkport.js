const axios = require('axios')
const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "checkport",
    run: async (client, interaction, config, db) => {
        const url = interaction.fields.getTextInputValue('check')
        axios.get(`https://internetdb.shodan.io/${url}`)
                    .then(function (response) {
                        const embedScan = new EmbedBuilder()
                        .setTitle('INFORMATION PORT')
                        .addFields({
                            name: '**``📡 IP``**',
                            value: '```fix\n' + url + '```'
                        })

                        .addFields({
                            name: '**``📥 PORT OPEN``**',
                            value: '```ini\n [' + response.data.ports + ']```'
                        })

                        interaction.reply({
                            embeds: [embedScan],
                            ephemeral: true

                        })
                        console.log(response.data.ports);
                    })
                    .catch(function (error) {
                        // en cas d’échec de la requête
                        console.log(error);
                        interaction.reply('No information available', { ephemeral: true })
                    })
                    .then(function () {
                        // dans tous les cas
                    });
                                        
    
    
        
            

        
        

    },
};