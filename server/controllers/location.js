import "../config/dotenv.js";
import { pool } from "../config/database.js";
import { getTimeInSeconds } from "../util/timelib.js";

// route successfully tested
const getAllLocations = async (request, response) => {
  const getLocationsQuery = `
    SELECT *
    FROM location
    ORDER BY id ASC
`;

  try {
    const result = await pool.query(getLocationsQuery);
    console.log("🎉 location data obtained");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing location data: ", error);
    response.status(500).json({ error: error.message });
  }
};

// route successfully tested
const createLocation = async (request, response) => {
  const {
    user_id,
    name,
    description,
    street_name,
    city,
    postal_code,
    country,
    longitude,
    latitude,
    image,
  } = request.body;
  const created_at = getTimeInSeconds();

  const createLocationQuery = `
      INSERT INTO location (user_id, name, description, street_name, city, postal_code, country, longitude, latitude, images, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *
    `;

  const createLocationParams = [
    user_id,
    name,
    description,
    street_name,
    city,
    postal_code,
    country,
    longitude,
    latitude,
    image,
    created_at,
  ];

  try {
    const result = await pool.query(createLocationQuery, createLocationParams);
    console.log("🎉 location data added");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error creating location data: ", error);
    response.status(500).json({ error: error.message });
  }
};

// route successfully tested
const getLocationById = async (request, response) => {
  const locationId = request.params.id;

  const getLocationById = `
    SELECT *
    FROM location
    WHERE id = $1
    ORDER BY id ASC
    `;

  try {
    const result = await pool.query(getLocationById, [locationId]);
    console.log("🎉 location data added");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error grabbing location data: ", error);
    response.status(500).json({ error: error.message });
  }
};

const updateLocation = async (request, response) => {
  const {
    location_id,
    name,
    description,
    street_name,
    city,
    postal_code,
    country,
    longitude,
    latitude,
    image,
  } = request.body;

  const updateLocationByIdQuery = `UPDATE location SET name = $1, description = $2, street_name = $3, city = $4, postal_code = $5, country = $6, longitude = $7, latitude = $8, images = $9 WHERE id = $10;`;
  const updateLocationByIdParams = [
    name,
    description,
    street_name,
    city,
    postal_code,
    country,
    longitude,
    latitude,
    image,
    location_id,
  ];

  try {
    const result = await pool.query(
      updateLocationByIdQuery,
      updateLocationByIdParams
    );
    console.log("🎉 location comment updated");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error updating location comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

const deleteLocation = async (request, response) => {
  const { location_id } = request.body;

  const deleteLocationByIdQuery = `DELETE FROM location WHERE id = $1`;
  const deleteLocationByIdParams = [location_id];

  try {
    const result = await pool.query(
      deleteLocationByIdQuery,
      deleteLocationByIdParams
    );
    console.log("🎉 location comment deleted");
    response.status(200).json({ data: result.rows });
  } catch (error) {
    console.error("⚠️ error deleting location comment: ", error);
    response.status(500).json({ error: error.message });
  }
};

export default {
  getAllLocations,
  createLocation,
  getLocationById,
  updateLocation,
  deleteLocation,
};
