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

const getCommentByLocationId = async (location_id) => {
  try {
    const response = await fetch(`/api/location_comment/${location_id}`);
    const locationComments = await response.json();
    return locationComments.data;
  } catch {
    return { result: "error" };
  }
};

export default {
  createLocationComment,
  getCommentByLocationId,
};
