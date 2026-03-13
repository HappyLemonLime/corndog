import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("gubball")
    .setDescription("Ask the magic gubbs ball a question")
    
    .addStringOption((option) => option.setName("question").setDescription('The question you are asking').setRequired(true)),
    async (interaction: ChatInputCommandInteraction) => {
        const responses = [ "i've got a peer review study right here that says-\n hm...\nIt says you're a pussy, {user} ! \n It doesn't say anything about your question, though.",
            "Hey, I don't work here, and if I did, I wouldn't sell you shit, {user}. Ask someone else.",
            "As of this moment in time and space... the answer to {user}'s question... it's unclear as shit bro, can you try again later?",
            "Sorry, there's a lot of noise at the moment. What did you ask, {user}?",
            "Huh, that's... a good question. I don't really know the answer, though. Sorry, {user}...",
            "**Hells yea**, {user}!",
            "The cat puked on the floor... the dog's missing... whelp, all signs point to **yes**. Don't question it, {user}!",
            "You probably didn't need to ask that, {user}, the answer's obviously **yes**.",
            "To that question, {user}, the answer is unquestionably **positive**!",
            "Is the sky blue? The answer is **yes**, in case I need to clarify. I don't know how often you go outside.",
            "I've managed to find a lot of information about your question, {user}, and pretty much all of them agree that the answer is **yes**.",
            "Holy moly - you should probably go buy a lottery ticket, luck is on your side with this one, {user}! The answer is **yes!**",
            "I must declare that the correct response to your question, {user}, is an indisputable **yes!**\n\nThe statistical likelyhood of this being a **yes** is pretty high, go for it, {user}!",
            "Duh, obviously this is a **yes**. You didn't need to ask me that.",
            "**Absolutely not**, {user}!",
            "Oh, wow. I've never seen results so **negative**, {user}...",
            "Ha... haha... why aren't you laughing? Oh, that wasn't a joke? Uh, sorry to break it to you, {user}, but that's clearly a **no**.",
            "**No**, and don't ever ask me that again, {user}.",
            "I can't really tell what result you're expecting, but... **no**, {user}.",
            "Were you expecting a **no**?",
            "... Well, I hope you did, that's the result I got, {user}.",
            "I wouldn't count on it, {user}...",
            "It's a **no** from me, {user}.",
            "**No**, {user}. Just... stop.",
            "Oh god. That's a big **no**, {user}.",
            "**Probably**. That's the best answer I can give right now, {user}.",
            "It's **likely** a **yes**, but it's not the most confident reply, {user} ",
            "Sure, {user}.",
            "This seems like a yes to me, {user}.",
            "Calculating {user}'s question...\nResult: 62.5% chance of **yes.**",
            "**Maybe.**",
            "Shit, that's the best I got man, that's a tough question, {user}!",
            "The chance of **yes** would probably get a gambler interested, but most people would be cautious, {user}.",
            "I'm a bit **uncertain**, but I'd say **yes** if I had to give you a clear answer, {user} ",
            "**Probably not**. That's the best answer I can give right now, {user}.",
            "**Maybe not.**",
            "Shit, that's the best I got man, that's a tough question, {user}!",
            "The odds aren't exactly in your favor here, {user}.\nI'd **probably** say **no**.",
            "Calculating {user}'s question...\n\nResult: 62.5% chance of **no.**",
            "Oh shit, {user} asked me a question... Uh... no?",
            "**Not** looking **good**, {user}, but it's not exactly the end of the world either.",
            "The answer to that question... would **probably** be a **no**, {user}.",
            "Yes, no wait. No. No, yes... Hold on, something's not working right here, {user} ",
            "**No**, final answer... **I think**.",
            "Did you shit yourself this morning? My answer to your question is the opposite of your answer to mine.",
            "If you believe in horoscopes, the answer is yes. If you don't, the answer is no.",
            "I was going to ask Dyno and Carlbot for help, but they don't like me... So let me roll a d20 for you, {user}. The higher the better;\n\n**{random:0:20} **",
            "The outlook is... uh... **netural**? I'm not even sure what that means, {user}.",
            "Personally, I wouldn't trust this answer at all. It's supposed to be a **50/50**, but whoever programmed me was really lazy, {user}.",
            "I'm going to pretend I didn't hear you, {user}.",
            "You should stop bothering me, {user}.",
            "...",
            "Could you rephrase, this time in coherent English, {user}?",
            "Oh my me! That's wild, {user}. **No!**",
            "I don't really care what the response is, this is a **yes** just because I want it to be, {user}.",
            "Oh, wow. Holy sh - Uhm, {user}? The amount of \"No\" I've seen scares even me.",
            "LET'S GO BABY. THAT'S WHAT I'M TALKING ABOUT. WOOOOOO! {user}absolutely nailed this one, **yes!**",
            "I know this will be difficult to believe, because you don't speek flabbneruoain, but...\n\n\"Twg myTpwrt rn awhsnvmeomon!\"\n\n{user}, it means yes.."
];

        const question = interaction.options.getString("question")

        const responses2 = responses[Math.floor(Math.random() * responses.length)]

        const gubbsresponse = responses2.replace(/{user}/g, interaction.user.toString());

        interaction.reply(`${interaction.user.toString()} asked a question: "${question}" Response: ${gubbsresponse}`)
    }
)


