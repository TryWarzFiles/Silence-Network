const { EmbedBuilder } = require("discord.js");
const config = require('../../../config/config')

module.exports = {
    name: "method",
    description: "All method Layer 4 Layer 7",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                .addFields({
                    name: 'Layer 4/3',
                    value: '```fix\n' + config.Method.layer4.join('\n') + '```'
                })
                .addFields({
                    name: 'Layer 7',
                    value: '```fix\n' + config.Method.layer7.join('\n') + '```'
                })
                    
            ],
            ephemeral: true
        })
    },
};
