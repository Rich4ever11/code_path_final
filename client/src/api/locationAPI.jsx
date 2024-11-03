const getAllLocations = async () => {
  try {
    const response = await fetch("/api/location");
    const locationData = await response.json();
    return locationData.data;
  } catch {
    return [];
  }
};

const createLocation = async (requestBody) => {
  try {
    const response = await fetch("/api/location", {
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
  getAllLocations,
  createLocation,
};
