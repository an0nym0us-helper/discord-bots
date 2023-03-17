const { SlashCommandBuilder, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("form")
        .setDescription("Provide a form for user"),
    async execute(command) {
        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('name')
                    .setLabel('Enter your name')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('email')
                    .setLabel('Enter your email')
                    .setStyle('PRIMARY')
            );
        await command.reply({ content: 'Please fill in the form:', components: [row1] });

        const filter = i => i.user.id === command.user.id;
        const collector = command.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
            if (i.customId === 'name') {
                const name = i.message.components[0].components[0].value;
                console.log(`Name: ${name}`);
            } else if (i.customId === 'email') {
                const email = i.message.components[0].components[1].value;
                console.log(`Email: ${email}`);
            }

            await i.deferUpdate();
        });

        collector.on('end', collected => {
            console.log(`Collected ${collected.size} commands.`);
        });
    },
};
