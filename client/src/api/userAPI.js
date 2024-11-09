const authenticateUser = async (requestBody) => {
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const user = await response.json();
    return user.data;
  } catch {
    return { result: "error" };
  }
};

export default {
  authenticateUser,
};
