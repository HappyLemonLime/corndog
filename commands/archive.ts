import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("archive")
    .setDescription("Get a link to everything we have archived!"),
    async (interaction: ChatInputCommandInteraction) => {

        interaction.reply("Here you go; Everything we\'ve archived in one spot. \n\nNotice: You need to download and open the files to have them be displayed properly.\n\n<https:\/\/docs.google.com\/spreadsheets\/d\/10aeEsHLwj_-K4Vg5fmk5P6LIjQ2hZ7GHj9TO8BtWkhg\/edit#gid=0>")
    }
)