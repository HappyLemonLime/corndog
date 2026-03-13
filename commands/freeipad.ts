import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction, MessageFlags, InteractionResponse } from 'discord.js';
import { TimeControl } from "../redis/entities";
import { woof, emote, time } from "../utils";

export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("freeipad")
    .setDescription("free ipad!!!!!"),
    async (interaction: ChatInputCommandInteraction) => {
        const check = await TimeControl.check("freeipad", undefined, true)
        if (check) {
            const member = interaction.member
            if (!member) {
                interaction.reply({content: "You don't exist! This is prolly an error on my part, sorry!", flags: MessageFlags.Ephemeral})
                return
            }
            const ipadMessage = "https:\/\/cdn.discordapp.com\/attachments\/749655964688580751\/759906127986556938\/mactrast-ipad-giveaway.png"
            let reply: InteractionResponse
        interaction.guild.members.fetch()
            .catch(async () => { interaction.reply("You can't get a free ipad at this time... try again later.") })
            .catch((caught) => { console.log(caught); interaction.reply("You can't get the free ipad >:(") })
            .then(async () => {
                reply = await interaction.reply({
                    content: `${ipadMessage}`, ephemeral: false
                }
                )
            })
            .then(async () => {
                //@ts-ignore
                if (reply) await TimeControl.generate({
                    channel: interaction.channel.id,
                    message: reply.id ?? "",
                    name: "freeipad",
                    
                }, time.duration({ days: 365 })/1000)
            }
            )
        }
else {
        interaction.reply(`${woof()}! ${interaction.user.toString()}, you need to wait ${"an amount of time idk lol I am not going to tell you (yes it is cause I hate you)"} to try this command again! ${emote("malcontent")}`)
    }
})