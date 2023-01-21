const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");


module.exports = {
    name: 'fivem',
    description: "CFX Resolver",
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
                .setCustomId('fivemresolvers')
                .setTitle('CFX Resolver');

                const resolvefivem = new TextInputBuilder()
                .setCustomId('fivemresol')
                .setLabel("Exemple : https://cfx.re/join/no9bx")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)

                const Resolver = new ActionRowBuilder().addComponents(resolvefivem);


                modal.addComponents(Resolver);

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