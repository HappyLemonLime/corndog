import ReadableCommand from "../classes/ReadableCommand";
import { SlashCommandBuilder, TextDisplayBuilder, ChatInputCommandInteraction, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ContainerBuilder, MessageFlags, ComponentType, AttachmentBuilder, EmbedBuilder } from 'discord.js';




export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("faq")
    .setDescription("Find out more about the server!"),
    async (interaction: ChatInputCommandInteraction) => {


    const faqContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        'What would you like to learn about?',
    ),
)   
.addActionRowComponents((ActionRow) =>
ActionRow.setComponents(new StringSelectMenuBuilder().setCustomId('faqQuestionSelector').setPlaceholder('What would you like to learn about?').addOptions({label: 'I would like to ask about the server', value: 'faq_serverResponse'},{label: 'I would like to ask a question about BeepBox and it\'s mods', value: 'faq_beepboxResponse'}) )
);

// about the server 

    const faqServerContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF) 
    .addTextDisplayComponents(new TextDisplayBuilder().setContent('## What would you like to learn about the discord server?'))
    .addActionRowComponents((ActionRow) =>
ActionRow.setComponents(new StringSelectMenuBuilder().setCustomId('faqQuestionSelector').setPlaceholder('Select what question you want answered').addOptions({label: 'How do color roles work?', value: 'question_colorRoles'},{label: 'What are the sheets?', value: 'question_sheets'},{label: 'What is BeepBox Radio?', value: 'question_bbradio'},{label: 'What is Beep Bishop?', value: 'question_bbishop'}) )
)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '-# (if you have any questions you don\'t see please ping or DM <@892271984673706025> if you think the question should be added to this command. Feel free to also ask in <#1335756749738606683>!)',
    ),
);


    const faqColorRoleContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '# FAQ - Color roles\n## How do I get a color role? \nYou can gain access to color roles by submitting a song to <#283697671741374465>, <#539510352526835714> or <#596009020502966302> and getting 10 👌\'s. This will unlock the base color roles (Blue1 <:blue1:1450268976885272598>, Green1 <:green1:1450269118379851967>, Yellow1 <:yellow1:1450269804278714519>, Orange1  <:orange1:1450269268766884142>, Red1  <:red1:1450269661865185391>, Pink1 <:pink1:1450269401436782723> and Purple1 <:purple1:1450269520085258435> )\n\nYou can get more color roles by submitting songs to the sheets. ( Blue 2-4 <:blue2:1450269004953551020> <:blue3:1450269027434758280> <:blue4:1450269052088877127>, Green 2-4 <:green2:1450269150328000703> <:green3:1450269202337366047> <:green4:1450269237582102761>, Yellow 2-4 <:yellow2:1450269833546436639> <:yellow3:1450269867487002755> <:yellow4:1450269907882082384>, Orange 2-4 <:orange2:1450269298017960037> <:orange3:1450269326975176935> <:orange4:1450269370512310293>, Red 2-4 <:red2:1450269697659506719> <:red3:1450269740932010066> <:red4:1450269776495771668>, Pink 2-4 <:pink2:1450269428922192073> <:pink3:1450269465378947236> <:pink4:1450269494856651035> and Purple 2-4 <:purple2:1450269561227186417> <:purple3:1450269600246661161> <:purple4:1450269631335104513>.) \n\n-# (For more info on the sheets, please do go to <#1328858097673965611>.)',
    ),
)   

    const faqSheetsContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '# FAQ - Song submission sheets\n## What are the song submission sheets? \nThe song submission sheets, often simply called \"sheets\" by the community is a place where you can submit songs for them to be ranked by judges. The judging process works like this:\n\nyou submit a song [here](https:\/\/docs.google.com\/forms\/d\/e\/1FAIpQLSfNYjX8Kks67Dzw-1wH62DI6URf-GTVMTCULLdbTcS-ra2_ew\/viewform) and then wait for your song to be scored by four different judges. Each song will be scored out of 100 based off of a rubric that can be found [here](https:\/\/docs.google.com\/spreadsheets\/d\/1zWnl7f_VNFltMWMVEDzaIPym-YWbIMD2Lzh5JDH1bSw\/edit?usp=sharing) in this document. \n\nOnce your song has been scored by all four judges, all four scores your song gets will be averaged out and the final average score determines the ranking for the song, and in-turn the role that will be awarded.\n\n-# helpful links for the sheets: \n- [Song submission form](https:\/\/docs.google.com\/forms\/d\/e\/1FAIpQLSfNYjX8Kks67Dzw-1wH62DI6URf-GTVMTCULLdbTcS-ra2_ew\/viewform)\n- [The sheets](https:\/\/docs.google.com\/spreadsheets\/d\/1zWnl7f_VNFltMWMVEDzaIPym-YWbIMD2Lzh5JDH1bSw\/edit?gid=325636608#gid=325636608)\n- [Report stolen songs](https:\/\/docs.google.com\/forms\/d\/e\/1FAIpQLSdHQ4TYsdn39Y0ONjgCsvDyBuC26gXdH11rNdhDxeAgoeNdOg\/viewform) \n\n-# you can read more here <#1328858097673965611>',
    ),
)   

    const faqBBRadioContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '# FAQ - BeepBox Radio\n## What is BeepBox Radio? \nBeepBox Radio is a weekly live stream primarily hosted by <@615708974242856981> that happens at **4PM EST every Saturday** where a host plays songs submitted by users. The submission form can be found [here](https:\/\/forms.gle\/UuhmRUHdmUaa1Kgv5).\n\n-# (for more info on BeepBox radio, please check the pins in <#1023316546036170783>.)\n\n-# helpful links for BeepBox Radio:\n- [BeepBox Radio submission form](https:\/\/forms.gle\/UuhmRUHdmUaa1Kgv5)\n- [BeepBox Radio submission sheet](https:\/\/docs.google.com\/spreadsheets\/d\/1yvHE9jsX6hJLFL82OkfqDHP9MWJEjzdIzl2OUifVCxk\/edit?usp=sharing)',
    ),
)   

    const faqBBishopContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '# FAQ - Beep Bishop \n## What is Beep Bishop?\n\n**Beep Bishop is a monthly competition we have in the BeepBox Discord.** On the 1st of each month (with some exceptions) the theme is announced. And on the 15th the submission form is released. At the end of the month the voting form is sent out, where you\'ll have a week to listen to submissions and vote on them. Submissions will also appear on a themed BeepBox Radio episode!\n\n-# If you have any questions, see https:\/\/discord.com\/channels\/235138363131166728\/1191577567673733120\/1456062658896859147 or message <@999824751054815263> or any online community support staff.\n\n-# Feel free to look in <#1054055079893811301> for the latest Beep Bishop competition!',
    ),
)  


// end of questions about the discord server



// about BeepBox & it's mods

    const faqBeepBoxContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF) 
    .addTextDisplayComponents(new TextDisplayBuilder().setContent('## What would you like to learn about BeepBox and it\'s mods?'))
    .addActionRowComponents((ActionRow) =>
ActionRow.setComponents(new StringSelectMenuBuilder().setCustomId('faqQuestionSelector').setPlaceholder('Select what question you want answered').addOptions({label: 'How do I add a sample to my song?', value: 'question_addsample'},{label: 'How do I fade a note in my song?', value: 'question_fadenote'},{label: 'How do I pitch bend a note in my song?', value: 'question_pitchbend'},{label: 'What mod should I use to make music?', value: 'question_whatmod'}) )
)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '-# (if you have any questions you don\'t see please ping or DM <@892271984673706025> if you think the question should be added to this command. Feel free to also ask in <#1335756749738606683>!)',
    ),
);

    const faqAddSampleContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        'https:\/\/cdn.discordapp.com\/attachments\/1451411773541449862\/1451411846400577718\/howtoimportsamples.gif?ex=6946141e&is=6944c29e&hm=c8300aa8e27dc4e6a17c7e66c5129d3f4e1336e249fe575601149739ce70c9c5',
    ),
)  

    const faqFadeNoteContainer = new EmbedBuilder()
    .setTitle("Here is how to fade a note in BeepBox.")
    .setImage("https://i.imgur.com/mbozQgt.gif");

//     const faqFadeNoteContainer = new ContainerBuilder()
//     .setAccentColor(0xE300FF)
//     .addTextDisplayComponents((textDisplay) =>
//     textDisplay.setContent(
//         'info about how to fade a note goes here',
//     ),
// )  

    const faqPitchbendNoteContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        'info about how to pitch bend a note goes here',
    ),
)  

    const faqWhatModContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        'info about what mod to use goes here',
    ),
)  


// end of questions about BeepBox & it's mods



        const reply = await interaction.reply({ components: [faqContainer], flags: [MessageFlags.IsComponentsV2] })

        const collector = reply.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            filter: (i) => i.user.id === interaction.user.id && i.customId === 'faqQuestionSelector',
            time: 120_000,
        });

        collector.on('collect', async (interaction) => {
            const choice = interaction.values[0];

            if (choice === 'faq_serverResponse') {
                await interaction.update({ components: [faqServerContainer], flags: [MessageFlags.IsComponentsV2], allowedMentions: {} });
            }

// Server related FAQ questions:

            if (choice === 'question_colorRoles') {
                await interaction.update({ components: [faqColorRoleContainer], flags: [MessageFlags.IsComponentsV2] });
            }

            if (choice === 'question_sheets') {
                await interaction.update({ components: [faqSheetsContainer], flags: [MessageFlags.IsComponentsV2] });
            }

            if (choice === 'question_bbradio') {
                await interaction.update({ components: [faqBBRadioContainer], flags: [MessageFlags.IsComponentsV2], allowedMentions: {} });
            }

            if (choice === 'question_bbishop') {
                await interaction.update({ components: [faqBBishopContainer], flags: [MessageFlags.IsComponentsV2] });
            }

// BeepBox related FAQ questions:            

            if (choice === 'faq_beepboxResponse') {
                await interaction.update({ components: [faqBeepBoxContainer], flags: [MessageFlags.IsComponentsV2], allowedMentions: {} });
            }

            if (choice === 'question_addsample') {
                await interaction.update({ components: [faqAddSampleContainer], flags: [MessageFlags.IsComponentsV2] });
            }

            if (choice === 'question_fadenote') {
                await interaction.update({ embeds: [faqFadeNoteContainer], flags: [MessageFlags.IsComponentsV2] });
            }

            if (choice === 'question_pitchbend') {
                await interaction.update({ components: [faqPitchbendNoteContainer], flags: [MessageFlags.IsComponentsV2] });
            }

            if (choice === 'question_whatmod') {
                await interaction.update({ components: [faqWhatModContainer], flags: [MessageFlags.IsComponentsV2] });
            }
         
            
        });


    }
)