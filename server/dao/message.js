import Message from '../models/message';

const createMessage = async (messageData) => {
  const message = new Message(messageData);
  await message.save();
  return message;
};

const getMessages = async () => {
  return await Message.find();
};

export default {
  createMessage,
  getMessages
};
