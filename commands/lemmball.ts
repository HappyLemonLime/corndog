import { hidden } from "colors";
import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
        .setName("lemmball")
        .setDescription("Ask the magic lemon a question")
        .addStringOption((option) =>
            option.setName("question")
                .setDescription('The question you are asking')
                .setRequired(true)
        ),
    async (interaction: ChatInputCommandInteraction) => {
        const responses1 = [
            "Hmm, prolly not Idk",
            "???",
            "Ask gubball as I don’t know",
            "No.",
            "Uhhh, no? I mean I guess?",
            "Yeah!",
            "Yeah :3",
            "Mhm, I would say yes I have a 70% chance to be wrong, but I think I am going to say yes on this one.",
            "I had a dream about this last night. Because of that, I will say yes",
            "I had a bad dream about this last night. The answer is no.",
            "I don’t know, ask the real LemonLime.",
            "https://cdn.discordapp.com/attachments/565164269570883585/1438946657612857465/Lemonslide.gif",
            "Well yes",
            "Yes I think so",
            "yes",
            "yes",
            "ima just say yes, feel free to correct me if I am wrong",
            "Imo, yes",
            "Yes?",
            ":eeheehee:",
            "No",
            "No, and stop asking me questions {user}.",
            "No, fuck off :eeheehee:",
            ":true:",
            ":false:",
            "No clue",
            "Haha no",
            "No :)",
            "…no?",
            "No?",
            "What?",
            "Huh? {user} No memes in off-topic please Please stop",
            "{user} The fuck type of question is that? No??",
            "Ask someone else please Idk",
            "{user} look it up on google or something",
            "{user} I am going to ban you for asking that </3"
        ];

        const limeresponses = [
            "{user} Please don't talk about Limes around here.",
            "{user} kindly, shut up.",
            "I hate limes.",
            "{user} ask ANYTHING ELSE. Plese stop talking about limes.",
            "{user} don't say that word around me."
        ];

        const hiddenword = "lime";

        const regex = new RegExp(`\\b${hiddenword}s?\\b`, "i"); //regex 🥀

        const question = interaction.options.getString("question") || "";

        const response = regex.test(question) ? limeresponses : responses1;

        const randomResponse = response[Math.floor(Math.random() * response.length)];

        const lemmresponse = randomResponse.replace(/{user}/g, interaction.user.toString());

        interaction.reply(`${interaction.user.toString()} asked a question: "${question}" Response: ${lemmresponse}`)
    }
)


