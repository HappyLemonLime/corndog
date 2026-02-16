import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("bend")
    .setDescription("Get info on how to pitch bend notes in BeepBox."),
    async (interaction: ChatInputCommandInteraction) => {

        interaction.reply("Sure thing, here\'s how to make bent notes! (Pitch Shift)\nhttps:\/\/i.imgur.com\/aDBDACR.gif")
    }
)