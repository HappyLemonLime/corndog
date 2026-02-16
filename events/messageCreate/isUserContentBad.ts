import { Message, TextChannel, userMention, } from "discord.js"
import { channels } from "../../config"
import { hasUrl, tracer } from "../../utils"


const reply = async (message: Message, content: string) => {
    const botCommands = (await message.guild.channels.fetch()).get(channels["bot-commands"]) as TextChannel
    const reply = await botCommands.send({
        content: userMention(message.author.id) + content,
    })
    setTimeout(async () => {
        await reply?.delete()
    }, 20000)
}

    export default async function isUserContentBad(message: Message): Promise<boolean> {

    if (message.author.bot || message.webhookId || message.applicationId) {
        tracer.log("A bot sent a message where it shouldn't have.")
        await reply(message, " bot activities....")
        return true
    }

    const { attachments, cleanContent } = message
    console.log(attachments.map(attachment => attachment.contentType))
    console.log(cleanContent)
    tracer.info(cleanContent)

    const noAttachments = attachments.size === 0

    const tooManyAttachments = attachments.filter(attachment => !attachment.contentType.match(/^image/g)).size > 1  

    const applicationAttachment = noAttachments ? false : attachments.first().contentType.match(/^application/g) ? true : false

    const urls = cleanContent.match(hasUrl)

    tracer.info("New user content post! Alright let's see...")
    
    if (noAttachments && !urls) {
        tracer.log("No attachments were found.")
        await reply(message, " You did not add any attachments! > _<")
        return true
    }

    if (tooManyAttachments) {
        tracer.log("Too many attachments!!")
        await reply(message, " You uploaded too many attachments! Please upload one per post!! > _<")
        return true
    }

    if (applicationAttachment) {
        tracer.log("un-allowed file type was uploaded")
        await reply(message, " You uploaded a file type that is not allowed! Please try again with an image, video or audio file!")
        return true
    }   

    tracer.info("Looks good!")
    return !urls && noAttachments ? true : false
}
