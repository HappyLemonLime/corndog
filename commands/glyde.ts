import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("glyde")
    .setDescription("Get info on how to make a Glyde song in Slarmoo\'s Box."),
    async (interaction: ChatInputCommandInteraction) => {

        interaction.reply("Okay, here\'s how to make a Glyde song! \nhttps:\/\/imgur.com\/a/\XOOv1ar.gif")
    }
)