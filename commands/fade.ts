import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("fade")
    .setDescription("Get info on how to fade notes in BeepBox."),
    async (interaction: ChatInputCommandInteraction) => {

        interaction.reply("Okay, here\'s how to make faded notes!\nhttps:\/\/i.imgur.com\/mbozQgt.gif")
    }
)