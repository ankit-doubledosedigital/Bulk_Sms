import messageDao from '../dao/message';

const createMessage = async (req, res) => {
  try {
    const { phoneNumber, message } = req.body;
    const newMessage = await messageDao.createMessage({ phoneNumber, message });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await messageDao.getMessages();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  createMessage,
  getMessages
};
