const getAllLocationComments = async () => {
  try {
    const response = await fetch("/api/location_comment");
    const locationData = await response.json();
    return locationData.data;
  } catch {
    return [];
  }
};

const createLocationComment = async (requestBody) => {
  try {
    const response = await fetch("/api/location_comment", {
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

export default {
  getAllLocationComments,
  createLocationComment,
};
