const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");
const config = require('../../../config/config')

module.exports = {
    name: 'attack',
    description: "Replies with a modal menu!",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    
    run: async (client, interaction, config, db) => {
        if(interaction.channel == null) return false;
            const clientID = config.Sliver.id + config.Gold.id +config.GOD.id
            const role = interaction.user.id
            
            if(clientID.includes(role)){
                const modal = new ModalBuilder()
                .setCustomId('attack')
                .setTitle('Attack-Hub');

                const ip = new TextInputBuilder()
                .setCustomId('ip')
                .setLabel("IP & Website:")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
                

                const port = new TextInputBuilder()
                .setCustomId('port')
                .setLabel("PORT:")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)

                const time = new TextInputBuilder()
                .setCustomId('time')
                .setLabel('TIME:')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)

                const method = new TextInputBuilder()
                .setCustomId('methode')
                .setLabel('METHODE:')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)

                const IPRow = new ActionRowBuilder().addComponents(ip);
                const PortRow = new ActionRowBuilder().addComponents(port);
                const TimeRow = new ActionRowBuilder().addComponents(time);
                const MethodRow = new ActionRowBuilder().addComponents(method);

                modal.addComponents(IPRow,PortRow,TimeRow,MethodRow);

                await interaction.showModal(modal);
            } else {
                const error = new EmbedBuilder()
                    .setDescription(`💸 You need to upgrade your account for use the ${interaction.guild.name} API \n 🚀 Please upgrade your account [here](https://silencenetwork.mysellix.io/product/63b7556d55e8a)`)
                    .setFooter({
                        text: `Requested by ${interaction.user.username}`,
                        iconURL: interaction.user.avatarURL()
                })
                interaction.reply({
                    embeds: [error]
                })
            }
    }
}