const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("form")
        .setDescription("Provide a form for user"),
    async execute(command) {

    },
};
