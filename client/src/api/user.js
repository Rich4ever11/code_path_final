const createUserAccount = async (requestBody) => {
  try {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const user = await response.json();
  } catch {
    return { result: "error" };
  }
};

const getUserDetails = async (requestBody) => {
  try {
    const { firebase_id } = requestBody;
    const response = await fetch(`/api/user/${firebase_id}`);
    const user = await response.json();
    console.log(user);
    return user.data;
  } catch {
    return { result: "error" };
  }
};

const getUserDetailsById = async (requestBody) => {
  try {
    const { user_id } = requestBody;
    const response = await fetch(`/api/user/detail/${user_id}`);
    const user = await response.json();
    return user.data;
  } catch {
    return { result: "error" };
  }
};

const getAllUsers = async () => {
  try {
    const response = await fetch(`/api/user`);
    const user = await response.json();
    return user.data;
  } catch {
    return { result: "error" };
  }
};

export default {
  createUserAccount,
  getUserDetailsById,
  getUserDetails,
  getAllUsers,
};
