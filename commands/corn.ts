import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, codeBlock } from 'discord.js';
import { ChatInputCommandInteraction } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
        .setName("cornscript")
        .setDescription("Converts a string to cornscript!")
        .addStringOption(
            option => option
                .setName("string")
                .setDescription("String to convert to cornscript!")
                .setRequired(true)
        )
        .addBooleanOption(
            option => option
                .setName("public")
                .setDescription("Do you want this to be public?")
                .setRequired(false)
        ), async (interaction: ChatInputCommandInteraction) => {
            const string = interaction.options.getString("string")
            const isPublic = interaction.options.getBoolean("public")

            const precipher: Array<[RegExp, string]> = [
                [/the/ig, "le"],
                [/and|from|at|to|in/ig, "▓"],
                [/of|for|on/ig, "mo"],
                [/you/ig, "knp"],
                [/\si\s/ig, "oo"],
                [/love/g, "nn"],
                [/ff/ig, "ph"],
                [/K/g, "C"],
                [/k/g, "c"],
                [/Q/g, "Cu"],
                [/q/g, "cu"],
                [/W/g, "Rh"],
                [/w/g, "rh"],
                [/X/g, "Cs"],
                [/x/g, "cs"],
                [/Y/g, "Ie"],
                [/y/g, "ie"],
                [/Z/g, "S"],
                [/z/g, "c"],
            ];
            const cipher: Map<string, string[]> = new Map([
                ["A", ["Ϙ", "Μν", "Νμ"]],
                ["a", ["Ϙ", "μν", "νμ"]],
                ["B", ["Ιτ", "Εν"]],
                ["b", ["ιτ", "εν"]],
                ["C", ["Πι", "Ιψ", "Αο"]],
                ["c", ["πι", "ιψ", "αο"]],
                ["D", ["Θο", "Ηξ"]],
                ["d", ["θο", "ηξ"]],
                ["E", ["Ϙ", "Ζυ", "Τε"]],
                ["e", ["Ϙ", "ζυ", "τε"]],
                ["F", ["Κω", "Γω"]],
                ["f", ["κω", "γω"]],
                ["G", ["Ιψ", "Πι"]],
                ["g", ["ιψ", "πι"]],
                ["H", ["Πε"]],
                ["h", ["πε"]],
                ["I", ["Ϙ", "Ωθ", "Ησ", "Υς"]],
                ["i", ["Ϙ", "ωθ", "ησ", "υς"]],
                ["J", ["Μυ", "Ησ"]],
                ["j", ["μυ", "ησ"]],
                ["L", ["Υϲ"]],
                ["l", ["υϲ"]],
                ["M", ["Ομ", "Ρα"]],
                ["m", ["ομ", "ρα"]],
                ["N", ["Ρα", "Ομ"]],
                ["n", ["ρα", "ομ"]],
                ["O", ["Ϙ", "Λω", "Ϲκ"]],
                ["o", ["Ϙ", "λω", "ϲκ"]],
                ["P", ["Εν", "Ιτ"]],
                ["p", ["εν", "ιτ"]],
                ["R", ["Φα"]],
                ["r", ["φα"]],
                ["S", ["Αο", "Πι"]],
                ["s", ["αο", "πι"]],
                ["T", ["Ηξ", "Θο"]],
                ["t", ["ηξ", "θο"]],
                ["U", ["Ϙ", "Βω", "Οδ", "Γω"]],
                ["u", ["Ϙ", "βω", "οδ", "γω"]],
                ["V", ["Γω", "Κω", "Οδ"]],
                ["v", ["γω", "κω", "οδ"]],
                [".", ["lol", "XD", ":v"]],
                ["?", [":clueless:", ":V"]],
                ["'", ["▖", "▗", "▘", "▝"]],
                ["1", ["𐆕·"]],
                ["2", ["𐆕:"]],
                ["3", ["𐆕∴"]],
                ["4", ["𐆕∷"]],
                ["5", ["𐆕⁙"]],
                ["6", ["∴∴"]],
                ["7", ["∴∷"]],
                ["8", ["∷∷"]],
                ["9", ["∷⁙"]],
                ["0", ["𐆕𐆕"]],
                ["▓", ["Ππ", "ππ"]]
            ]);

            function pick(arr: string[] | void) {
                if (arr) {
                    const randomized = Math.floor(Math.random() * 10);
                    const limit = arr.length;
                    return arr[randomized % limit];
                } else return "🌽";
            }

            function translate(unciphered: string) {
                let ciphered,
                    preciphered = unciphered;
                precipher.forEach(
                    (entry: [RegExp, string]) =>
                        (preciphered = preciphered.replace(entry[0], entry[1]))
                );
                preciphered = preciphered.replace(/\s/g, "");
                const split = preciphered.split("");
                const mapped = split.map((char) => pick(cipher.get(char)));
                mapped[0] = "&" + mapped[0];
                const joined = mapped.join(" ");
                ciphered = joined;
                return ciphered;
            }
            interaction.reply({
                content: codeBlock(translate(string)),
                ephemeral: !isPublic
            })
        })