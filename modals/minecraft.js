const dns = require('dns');

const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "minecraftresolver",
    run: async (client, interaction, config, db) => {
        const url = interaction.fields.getTextInputValue('minecraft')
        dns.lookup(url, (err, address, family) => {
            if (err) {
                console.error(`Error resolving server address: ${err.message}`);
                const embederror = new EmbedBuilder()
                .addFields({
                    name: "**`MINECRAFT SERVER`**",
                    value: "```diff\n" + url + "```"
                })
                .addFields({
                    name: '**`ERROR`**',
                    value: '```fix\n ' + err.message + '```'
                })
                interaction.reply({
                    embeds: [embederror]
                })
            } else {
                console.log(`Server IP: ${address}`);
                const embed = new EmbedBuilder()
                .addFields({
                    name: "**`MINECRAFT SERVER`**",
                    value: "```diff\n" + url + "```"
                })
                .addFields({
                    name: '**`SUCCESS`**',
                    value: '```fix\n' + address + '```'
                })
                interaction.reply({
                    embeds: [embed]
                })
            }
        });

        
        

    },
};