const axios = require('axios')
const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "fivemresolvers",
    run: async (client, interaction, config, db) => {
        const url = interaction.fields.getTextInputValue('fivemresol')
        axios.get(`http://${url}:30120/info.json`).then(function(response){
            console.log(response.data.vars.serverIp);
        })
    
        
            

        
        

    },
};