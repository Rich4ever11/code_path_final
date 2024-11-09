const getAllLocations = async () => {
  try {
    const response = await fetch("/api/location");
    const locationData = await response.json();
    return locationData.data;
  } catch {
    return [];
  }
};

const getLocationById = async (location_id) => {
  try {
    const response = await fetch(`/api/location/${location_id}`);
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

const updateLocation = async (requestBody) => {
  try {
    const response = await fetch("/api/location", {
      method: "PUT",
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

const deleteLocation = async (requestBody) => {
  try {
    const response = await fetch("/api/location", {
      method: "DELETE",
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
  getLocationById,
  updateLocation,
  deleteLocation,
};
