import { ReadableCommand } from "../classes";
import { SlashCommandBuilder, ChatInputCommandInteraction, ComponentBuilder, MediaGalleryBuilder } from 'discord.js';

export default new ReadableCommand(
    new SlashCommandBuilder()
        .setName("soapbubble")
        .setDescription("Ask the magic soap bubble a question")
        .addStringOption((option) =>
            option.setName("question")
                .setDescription('The question you are asking')
                .setRequired(true)
        ),
    async (interaction: ChatInputCommandInteraction) => {

    const mediaGallery = new MediaGalleryBuilder({
        items: [
            {
                description: "Some text here",
                media: {
                    url: 'https://cdn.discordapp.com/attachments/901961384038920242/1456104644169170964/1401427693425397935.png?ex=695726a0&is=6955d520&hm=e9f41397f76b97dc449c0183cb43c08c44c73d78584bf9948d29e912465a18d0',
                },
            },
        ],
    });

        const responses1 = [
            "omg...yes…",
            "shoutout my wife nintari for making this happen",
            "YES YES YES I AFFIRM",
            "YEAYEAYEAYEAYEAYEAYEAYEAYEA",
            "YIPPEE!! YAYY!!",
            "Uh, yeah?",
            "yes!",
            "yes!1!! also hi chat!",
            "yis!",
            "yeah i sees the vision {user}",
            "tbh, i can sees it",
            "yes actually!! and don’t forget to sees the day!!",
            "ooh yeah it looks wonderful for you {user} <:eeheehee:1166244591436050492>",
            "<:eeheehee:1166244591436050492> yeah!!",
            "Yesss…beloved 💖",
            "💯",
            "tbh yeah",
            "quite!",
            "yep! and looks like you get a mickey mouse ride for the next tourney too",
            "menAgree",
            "yesssss…also shoutout lenny you are my strawberry",
            "yess,, also godspeed steelfinch",
            "yea :D",
            "# idk",
            "idk lol",
            "prolly lawle",
            `{user} keep in mind dis is who you’re talking to… ${mediaGallery}`,
            "imme gonna have to ask my wife",
            "wait lemme check da interwebs rq",
            "wait lemme check da elaborated rules",
            "mmm,,,lemme ask the others",
            "well there’s defo a non-zero chance, imma tell you dat much.",
            "chat lemme make a poll rq",
            "erm,,,",
            "wot",
            "uhhhhhhhggggggg",
            "uhh uhh uhh… *backflips and dies*",
            "uhhh,, prolly? let’s take a sees",
            "uhm,, idk but das interesting lemme write dat down ✍️",
            "busy workin’ on my latest 30 minute specil ya kno?? but imma get back to you in a jiffy tho don’t fret",
            "let’s peep the handbook for more info",
            "do it look like i know lmaoo",
            "i dunno ugghhhhhh *shakes butt*",
            "idk i’m thinkin’ about men right noww lwk just ask me laterrr",
            "check pins",
            "*zzz* {user} imme get back to you *zzz* imme so sleepys *zzz*",
            "{user} i jsut woke up, idk;;",
            "eat sand",
            "i had a nightmare where i ate glue",
            "mtgenuser",
            "maybe? also hi steelfinch",
            "idk but shaktoom boutta drop soon y’all just don’t know it",
            "is it pomegranate season yet?",
            "425F until golden brown",
            "too busy soaping to answer dat rn i miss my wife",
            "AUUUUUUGH NOOOOOOOOO <:agony:835725898719952937>",
            "not gonna entertain dat, free devious tho",
            "no soz 💔",
            "menDisagree",
            "this is not in da Bible",
            "prolly not tbh",
            "yeah! wait no. wait lemme check, but i’m pretty sure not.",
            "Uh, no.",
            "no??",
            "no? also hi chat",
            "no,,,",
            "no",
            "nuh uh",
            "nahhh",
            "{user} i don’t think so honestlyy",
            "I sees that this is no bueno.",
            "rule 2 bc u pmo",
            "NO LAWL??",
            ":koocfrown:",
            "wow!! goose egg probability type beat",
            "don’t look like it to me soz",
            "oof, not looking good for yuo {user}",
            "not at all actually",
            "NO?? REALLYY?????? dang, i guess <pdBpx really was we;;? 😔",
            "server is still cancelled due to sock peeing",
            "honestly you might just need to not,, you kno?",
            "no but you can always ask laterrr, might change ya neva knowwwe"   ];

        const gubresponses = ["fry at 425F until golden brown"];

        const soapresponses = [
            "yeah...hey das me!! :D",
             "uhmm idk {user}...wait das me??",
             "no,,,wat i even do 💔",
             "soap,,das me…",
             "i'm also in this episode"];

        const hiddenword1 = ["thegubbys", "gubbys", "gubbs", "gubs"];

        const hiddenword2 = "soap";
        
        const regex1 = new RegExp(`\\b(${hiddenword1.join("|")})\\b`, "i"); //regex 🥀

        const regex2 = new RegExp(`\\b${hiddenword2}\\b`, "i");

        const question = interaction.options.getString("question") || "";

        let responsePool = responses1;
        
        if (regex1.test(question)) {
            responsePool = gubresponses;
        } else if (regex2.test(question)) {
            responsePool = soapresponses;
        }

        const randomResponse = responsePool[Math.floor(Math.random() * responsePool.length)];

        const lemmresponse = randomResponse.replace(/{user}/g, interaction.user.toString());

        interaction.reply(`${interaction.user.toString()} asked a question: "${question}" Response: ${lemmresponse}`)
    }
)


