const { EmbedBuilder } = require("discord.js");
const fs = require('fs');

module.exports = {
  config: {
    name: "help",
    description: "Replies with help menu.",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix) => {
    const commands = client.prefix_commands.map(command => '`' + prefix + command.config.name + '`');

    return message.reply(
      {
        embeds: [
          new EmbedBuilder()
            .setDescription('Here are all the commands')
            .addFields({
              name: '**`/Attack`**',
              value: 'Attack throw'
            })
            .addFields({
              name: '**`/method`**',
              value: 'Show methods layer 4 layer 7'
            })
            .addFields({
              name: '**`/lookup`**',
              value: 'Check an IP'
            })
            .addFields({
              name: '**`/chech-port`**',
              value: 'Check open ports'
            })
            .addFields({
              name: '**`/info`**',
              value: 'View user information'
            })
            .addFields({
              name: '**`/status`**',
              value: 'View server status'
            })
            
            
            .setThumbnail(client.user.avatarURL())
            .setFooter({
              text: `Requested by ${message.author.username}`,
              iconURL: message.author.avatarURL()
            })

            
            
        ]
      }
    );

  },
};
