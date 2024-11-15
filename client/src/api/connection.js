const handleConnectionCreation = async (requestBody) => {
  try {
    const response = await fetch("/api/connection", {
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

const handleAcceptConnection = async (requestBody) => {
  try {
    const response = await fetch("/api/connection/accept", {
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

const handleRejectConnection = async (requestBody) => {
  try {
    const response = await fetch("/api/connection/reject", {
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

const handleGetConnections = async (user_id) => {
  try {
    const response = await fetch(`/api/connection/${user_id}`);
    const userConnections = await response.json();
    return userConnections.data;
  } catch {
    return [];
  }
};

const handleGetValidConnections = async (user_id) => {
  try {
    const response = await fetch(`/api/connection/valid/${user_id}`);
    const userConnections = await response.json();
    return userConnections.data;
  } catch {
    return [];
  }
};

export default {
  handleConnectionCreation,
  handleAcceptConnection,
  handleRejectConnection,
  handleGetConnections,
  handleGetValidConnections,
};
