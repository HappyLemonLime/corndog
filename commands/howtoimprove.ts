import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("howtoimprove")
    .setDescription("Get quotes that might help you improve in one way or another."),
    async (interaction: ChatInputCommandInteraction) => {
        const responses = ["Oddbrew\'s guide to beepboxing 101\nStep 1: listen to something that moves you\nStep 2: Become that something that you are listening to\nStep 3: Find your center and drop some lines in beepbox\nStep 4: Get stuck, if you don\'t your not trying hard enough\nStep 5: Stay stuck until you get unstuck or hurl it towards your new file folder for later\nStep 6: when and if unstuck, mess with the settings until you have an epiphany\nStep 7: Go mad until you get it done",
            "Time and practice, my friend. Time and practice.",
            "Time and practice, mate. Them\'s the basics to getting better.",
            "```Improving at music is a process just like with any skill but there are some more clear paths you can take depending on what you want to do with it.\n\nTo use a food analogy, if you wanna be a good cook it can help to have technique but mostly you just need to get in the kitchen and make food. Having a recipe definitely helps sometimes.\n\nAll that being said though, best way to improve is to just write music (but if you wanna write certain types of music, it doesn’t hurt to use references just like drawing!)\n\nGoogling “how to make x genre” can also be really useful but tends to rely on at least some foundation of knowledge.```\n-Impasaurus"];

        const responses2 = responses[Math.floor(Math.random() * responses.length)]

        interaction.reply(responses2)
    }
)