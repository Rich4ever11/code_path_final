const createMessage = async (requestBody) => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    return { result: "success" };
  } catch {
    return { result: "error" };
  }
};

const renderChatMessages = async (connection_id) => {
  try {
    const response = await fetch(`/api/chat/${connection_id}`);
    const conversation = await response.json();
    return conversation.data;
  } catch {
    return [];
  }
};

const renderChatLogs = async (user_id) => {
  try {
    const response = await fetch(`/api/chat/user/${user_id}`);
    const conversation = await response.json();
    return conversation.data;
  } catch {
    return [];
  }
};

export default {
  createMessage,
  renderChatLogs,
  renderChatMessages,
};
