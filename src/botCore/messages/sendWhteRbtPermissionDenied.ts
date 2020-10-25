import { Message, MessageAttachment } from "discord.js";
export async function sendWhteRbtPermissionDenied(message: Message, messageText: string) {

  const currentWorkingDirectory = await process.cwd();
  const whteRbtObjGifPath = `${currentWorkingDirectory}/public/gifs/Whte_rbt.obj.gif`;
  message.reply(messageText, new MessageAttachment(whteRbtObjGifPath));

}