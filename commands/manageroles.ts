import ReadableCommand from "../classes/ReadableCommand";
import { SlashCommandBuilder, ChatInputCommandInteraction, InteractionType, InteractionResponse, Guild, GuildMember, GuildMemberRoleManager, EmbedBuilder, ColorResolvable, ButtonBuilder, ButtonStyle, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ContainerBuilder, UserSelectMenuBuilder, MessageFlags, ActionRow, ComponentEmojiResolvable, ComponentType } from 'discord.js';
import { roles } from "../config";
import { userMention } from 'discord.js';
import { users } from '../config'
import { getPurple } from "../utils";
import { emote } from "../utils";


const colors = [
    {
        label: 'blue1',
        description: 'The "blue1" color role.',
        value: 'blue1',
        emoji: '1450268976885272598'
    },
    {
        label: 'blue2',
        description: 'The "blue2" color role.',
        value: 'blue2',
        emoji: '1450269004953551020'
    },
    {
        label: 'blue3',
        description: 'The "blue3" color role.',
        value: 'blue3',
        emoji: '1450269027434758280'
    },
    {
        label: 'blue4',
        description: 'The "blue4" color role.',
        value: 'blue4',
        emoji: '1450269052088877127'
    },
    {
        label: 'green1',
        description: 'The "green1" color role.',
        value: 'green1',
        emoji: '1450269118379851967'
    },
    {
        label: 'green2',
        description: 'The "green2" color role.',
        value: 'green2',
        emoji: '1450269150328000703'
    },
    {
        label: 'green3',
        description: 'The "green3" color role.',
        value: 'green3',
        emoji: '1450269202337366047'
    },
    {
        label: 'green4',
        description: 'The "green4" color role.',
        value: 'green4',
        emoji: '1450269237582102761'
    },
    {
        label: 'yellow1',
        description: 'The "yellow1" color role.',
        value: 'yellow1',
        emoji: '1450269804278714519'
    },
    {
        label: 'yellow2',
        description: 'The "yellow2" color role.',
        value: 'yellow2',
        emoji: '1450269833546436639'
    },
        {
        label: 'yellow3',
        description: 'The "yellow3" color role.',
        value: 'yellow3',
        emoji: '1450269867487002755'
    },
    {
        label: 'yellow4',
        description: 'The "yellow4" color role.',
        value: 'yellow4',
        emoji: '1450269907882082384'
    },
    {
        label: 'orange1',
        description: 'The "orange1" color role.',
        value: 'orange1',
        emoji: '1450269268766884142'
    },
    {
        label: 'orange2',
        description: 'The "orange2" color role.',
        value: 'orange2',
        emoji: '1450269298017960037'
    },
    {
        label: 'orange3',
        description: 'The "orange3" color role.',
        value: 'orange3',
        emoji: '1450269326975176935'
    },
    {
        label: 'orange4',
        description: 'The "orange4" color role.',
        value: 'orange4',
        emoji: '1450269370512310293'
    },
    {
        label: 'red1',
        description: 'The "red1" color role.',
        value: 'red1',
        emoji: '1450269661865185391'
    },
    {
        label: 'red2',
        description: 'The "red2" color role.',
        value: 'red2',
        emoji: '1450269697659506719'
    },
    {
        label: 'red3',
        description: 'The "red3" color role.',
        value: 'red3',
        emoji: '1450269740932010066'
    },
    {
        label: 'red4',
        description: 'The "red4" color role.',
        value: 'red4',
        emoji: '1450269776495771668'
    },
    {
        label: 'pink1',
        description: 'The "pink2" color role.',
        value: 'pink1',
        emoji: '1450269401436782723'
    },
    {
        label: 'pink2',
        description: 'The "pink2" color role.',
        value: 'pink2',
        emoji: '1450269428922192073'
    },
    {
        label: 'pink3',
        description: 'The "pink3" color role.',
        value: 'pink3',
        emoji: '1450269465378947236'
    },
    {
        label: 'pink4',
        description: 'The "pink4" color role.',
        value: 'pink4',
        emoji: '1450269494856651035'
    },
    {
        label: 'purple1',
        description: 'The "purple1" color role.',
        value: 'purple1',
        emoji: '1450269520085258435'
    },
    {
        label: 'purple2',
        description: 'The "purple2" color role.',
        value: 'purple2',
        emoji: '1450269561227186417'
    },
    {
        label: 'purple3',
        description: 'The "purple3" color role.',
        value: 'purple3',
        emoji: '1450269600246661161'
    },
    {
        label: 'purple4',
        description: 'The "purple4" color role.',
        value: 'purple4',
        emoji: '1450269631335104513'
    },
]



export default new ReadableCommand(
    new SlashCommandBuilder()
    .setName("manage-roles")
    .setDescription("A command that helps you manage your roles!"),
    async (interaction: ChatInputCommandInteraction) => {


    const manageRoleContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        'What would you like to do?',
    ),
)   
.addActionRowComponents((ActionRow) =>
ActionRow.setComponents(new StringSelectMenuBuilder().setCustomId('manageRoleSelection').setPlaceholder('Select option').addOptions({label: 'Manage color roles', value: 'mng_colorRole'},{label: 'Manage role icon', value: 'mng_roleIcon'}) )
)
.addSeparatorComponents((separator) => separator)

.addActionRowComponents((row) =>
    row.setComponents(
        // new ButtonBuilder().setCustomId('ok').setLabel('Ok').setStyle(ButtonStyle.Primary),new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Danger)
    ),
);

// start color role options

    const manageColorRoleContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '## Color role manager\nWhat would you like to do?',
    ),
)   
.addActionRowComponents((ActionRow) =>
ActionRow.setComponents(new StringSelectMenuBuilder().setCustomId('manageRoleSelection').setPlaceholder('Select option').addOptions({label: 'Remove current color role', value: 'remove_colorRole'},{label: 'Replace current color role', value: 'replace_colorRole'}) )
)
.addSeparatorComponents((separator) => separator)

.addActionRowComponents((row) =>
    row.setComponents(
        // new ButtonBuilder().setCustomId('ok').setLabel('Ok').setStyle(ButtonStyle.Primary),new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Danger)
    ),
); // I need to make it so when a user selects 'Remove current color role' and clicks 'ok' it removes the current color role that the user has.
   // If the user has no current collor roles, I need to then reply with something like "There are currently no color roles on your account."


    
    const manageColorRoleColorPickerOpitonsContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '## Color role manager\nWhat color do you want to give yourself?\n-# (please note that you can only sellect a color role that you have permission to use for more info please do /faq or visit <#1328858757266018417>.)',
    ),
)   
.addActionRowComponents((ActionRow) =>
ActionRow.setComponents(new StringSelectMenuBuilder().setCustomId('manageRoleSelection').setPlaceholder('Select what color you would like').addOptions({label: 'Blue', value: 'blue', emoji:'1450268976885272598'},{label: 'Green', value: 'green', emoji:'1450269118379851967'},{label: 'Yellow', value: 'yellow', emoji:'1450269804278714519'},{label: 'Orange', value: 'orange', emoji:'1450269268766884142'},{label: 'Red', value: 'red', emoji:'1450269661865185391'},{label: 'Pink', value: 'pink', emoji:'1450269401436782723'},{label: 'Purple', value: 'purple', emoji:'1450269520085258435'}) )
)
.addSeparatorComponents((separator) => separator)

.addActionRowComponents((row) =>
    row.setComponents(
        // new ButtonBuilder().setCustomId('ok').setLabel('Ok').setStyle(ButtonStyle.Primary),new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Danger)
    ),
); // I need to make it so when the user selects what color they want, it opens a sub-menu with the 1-4 color roles for that color.
   // for the 1-4 color role picker, I then need to check if the user can even have that color role. I think I should also do a check for the first command where if someone tries to do a color role option and does not even have p1 it redirects the user to do /faq or go to the roles channel.



    const manageRoleIconContainer = new ContainerBuilder()
    .setAccentColor(0xE300FF)
    .addTextDisplayComponents((textDisplay) =>
    textDisplay.setContent(
        '## Role icon manager\nWhat would you like to do?',
    ),
)   
.addActionRowComponents((ActionRow) =>
ActionRow.setComponents(new StringSelectMenuBuilder().setCustomId('manageRoleSelection').setPlaceholder('Select option').addOptions({label: 'Remove role icon', value: 'mng_iconRole'},{label: 'Replace current role icon', value: 'replace_roleIcon'}) )
)
.addSeparatorComponents((separator) => separator)

.addActionRowComponents((row) =>
    row.setComponents(
        // new ButtonBuilder().setCustomId('ok').setLabel('Ok').setStyle(ButtonStyle.Primary),new ButtonBuilder().setCustomId('cancel').setLabel('Cancel').setStyle(ButtonStyle.Danger)
    ),
);

        const reply = await interaction.reply({ components: [manageRoleContainer], flags: [MessageFlags.IsComponentsV2] })

        const collector = reply.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            filter: (i) => i.user.id === interaction.user.id && i.customId === 'manageRoleSelection',
            time: 120_000,
        });

        collector.on('collect', async (interaction) => {
            const choice = interaction.values[0];

            if (choice === 'mng_colorRole') {
                await interaction.update({ components: [manageColorRoleContainer], flags: [MessageFlags.IsComponentsV2] });
            }
            if (choice === 'mng_roleIcon') {
                await interaction.update({ components: [manageRoleIconContainer], flags: [MessageFlags.IsComponentsV2] });
            }
            // color role choices

            if (choice === 'remove_colorRole') {
                console.log('A user clicked to remove current color roles.')
            }

            if (choice === 'replace_colorRole') {
                await interaction.update({ components: [manageColorRoleColorPickerOpitonsContainer], flags: [MessageFlags.IsComponentsV2]})
            }
            
        });


    }
)